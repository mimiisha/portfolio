import React from 'react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, act, within } from '@testing-library/react'
import { MemoryRouter, useLocation } from 'react-router-dom'
import NavBar from './NavBar'

const LocationProbe = () => {
  const location = useLocation()
  return <output data-testid="pathname">{location.pathname}</output>
}

const renderAt = (pathname) =>
  render(
    <MemoryRouter initialEntries={[pathname]}>
      <NavBar />
      <LocationProbe />
    </MemoryRouter>
  )

const getLogoLink = () => {
  const logoLinks = screen
    .getAllByRole('link')
    .filter((link) => link.getAttribute('href') === '/' && link.querySelector('img'))
  expect(logoLinks).toHaveLength(1)
  return logoLinks[0]
}

const getMenuToggle = () => {
  const toggles = screen
    .getAllByRole('button')
    .filter((button) => button.hasAttribute('aria-expanded'))
  expect(toggles).toHaveLength(1)
  return toggles[0]
}

describe('NavBar - logo', () => {
  let reload

  beforeEach(() => {
    vi.useFakeTimers()
    reload = vi.fn()
    vi.stubGlobal('location', { ...window.location, reload })
    vi.spyOn(window, 'scrollTo').mockImplementation(() => {})
  })

  const clickAndFlushTimers = (element) => {
    fireEvent.click(element)
    act(() => {
      vi.advanceTimersByTime(5_000)
    })
  }

  it('navega para "/" ao clicar no logo estando em outra rota', () => {
    renderAt('/sobre')

    clickAndFlushTimers(getLogoLink())

    expect(screen.getByTestId('pathname').textContent).toBe('/')
  })

  it('não recarrega a página ao clicar no logo, nem de forma adiada', () => {
    renderAt('/sobre')

    clickAndFlushTimers(getLogoLink())

    expect(reload).not.toHaveBeenCalled()
  })

  it('não recarrega a página ao clicar no logo estando em "/"', () => {
    renderAt('/')

    clickAndFlushTimers(getLogoLink())

    expect(reload).not.toHaveBeenCalled()
  })

  it('rola ao topo ao clicar no logo estando em "/"', () => {
    renderAt('/')

    clickAndFlushTimers(getLogoLink())

    expect(window.scrollTo).toHaveBeenCalledWith(0, 0)
    expect(screen.getByTestId('pathname').textContent).toBe('/')
  })

  it('não força rolagem ao clicar no logo vindo de outra rota', () => {
    renderAt('/projetos')

    clickAndFlushTimers(getLogoLink())

    expect(window.scrollTo).not.toHaveBeenCalled()
  })

  it('fecha o menu mobile ao clicar no logo', () => {
    renderAt('/')
    fireEvent.click(getMenuToggle())
    expect(getMenuToggle().getAttribute('aria-expanded')).toBe('true')

    clickAndFlushTimers(getLogoLink())

    expect(getMenuToggle().getAttribute('aria-expanded')).toBe('false')
  })
})

describe('NavBar - tecla Escape no menu mobile', () => {
  const renderWithOutsideButton = () =>
    render(
      <MemoryRouter initialEntries={['/']}>
        <NavBar />
        <button type="button">Fora do header</button>
      </MemoryRouter>
    )

  const openMenu = () => {
    fireEvent.click(getMenuToggle())
    expect(getMenuToggle().getAttribute('aria-expanded')).toBe('true')
  }

  const getMobileMenuLink = (name) => {
    const menu = document.getElementById(getMenuToggle().getAttribute('aria-controls'))
    return within(menu).getByRole('link', { name })
  }

  const pressKeyOnFocused = (key) => {
    fireEvent.keyDown(document.activeElement, { key })
  }

  it('fecha o menu aberto e aria-expanded volta a "false"', () => {
    renderWithOutsideButton()
    openMenu()
    getMobileMenuLink('Sobre').focus()

    pressKeyOnFocused('Escape')

    expect(getMenuToggle().getAttribute('aria-expanded')).toBe('false')
  })

  it('devolve o foco ao botão do menu quando o foco estava dentro do header', () => {
    renderWithOutsideButton()
    openMenu()
    const linkInsideMenu = getMobileMenuLink('Projetos')
    linkInsideMenu.focus()
    expect(document.activeElement).toBe(linkInsideMenu)

    pressKeyOnFocused('Escape')

    expect(document.activeElement).toBe(getMenuToggle())
  })

  it('fecha o menu sem roubar o foco quando o foco estava fora do header', () => {
    renderWithOutsideButton()
    openMenu()
    const outsideButton = screen.getByRole('button', { name: 'Fora do header' })
    outsideButton.focus()

    pressKeyOnFocused('Escape')

    expect(getMenuToggle().getAttribute('aria-expanded')).toBe('false')
    expect(document.activeElement).toBe(outsideButton)
  })

  it('não fecha o menu com outra tecla', () => {
    renderWithOutsideButton()
    openMenu()
    getMobileMenuLink('Sobre').focus()

    pressKeyOnFocused('Enter')
    pressKeyOnFocused('Tab')

    expect(getMenuToggle().getAttribute('aria-expanded')).toBe('true')
  })

  it('com o menu fechado, Escape não move o foco para o botão do menu', () => {
    renderWithOutsideButton()
    const desktopLink = screen.getAllByRole('link', { name: 'Sobre' })[0]
    desktopLink.focus()

    pressKeyOnFocused('Escape')

    expect(getMenuToggle().getAttribute('aria-expanded')).toBe('false')
    expect(document.activeElement).toBe(desktopLink)
  })
})
