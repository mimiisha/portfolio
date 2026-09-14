import React from 'react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Layout from '../components/Layout.jsx'
import Home from '../pages/Home.jsx'
import AboutMe from '../pages/About.jsx'
import Portfolio from '../pages/Portfolio.jsx'
import Contact from '../pages/Contact.jsx'
import tailwindConfig from '../../tailwind.config.js'

vi.mock('aos', () => ({
  default: { init: vi.fn(), refresh: vi.fn(), refreshHard: vi.fn() },
}))

vi.mock('@emailjs/browser', () => ({
  default: { sendForm: vi.fn(), send: vi.fn(), init: vi.fn() },
}))

const FIXED_NOW = new Date('2030-01-15T12:00:00Z')

const V1_ROUTES = [
  { path: '/', Page: Home },
  { path: '/sobre', Page: AboutMe },
  { path: '/projetos', Page: Portfolio },
  { path: '/contato', Page: Contact },
]

const normalizeAssetUrl = (value) => {
  const withoutQuery = value.split('?')[0]
  const imgsIndex = withoutQuery.lastIndexOf('/imgs/')
  if (imgsIndex === -1) return value
  return `<asset>${withoutQuery.slice(imgsIndex)}`
}

const renderV1Route = ({ path, Page }) => {
  const result = render(
    <MemoryRouter initialEntries={[path]}>
      <Layout>
        <Page />
      </Layout>
    </MemoryRouter>
  )
  const fragment = result.asFragment()
  fragment.querySelectorAll('[src]').forEach((element) => {
    element.setAttribute('src', normalizeAssetUrl(element.getAttribute('src')))
  })
  return fragment
}

const ONLY_I2 = Symbol('only-i2')

const stripI2Keys = (value) => {
  if (Array.isArray(value)) return value.map(stripI2Keys)
  if (value === null || typeof value !== 'object') return value
  const entries = Object.entries(value)
  const kept = entries
    .filter(([key]) => !key.startsWith('i2'))
    .map(([key, child]) => [key, stripI2Keys(child)])
    .filter(([, child]) => child !== ONLY_I2)
  if (entries.length > 0 && kept.length === 0) return ONLY_I2
  return Object.fromEntries(kept)
}

const v1ThemeExtend = (config) => {
  const stripped = stripI2Keys(config.theme.extend)
  return stripped === ONLY_I2 ? {} : stripped
}

describe('congelamento da v1 - DOM das rotas', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(FIXED_NOW)
    vi.stubGlobal('innerWidth', 1024)
    vi.spyOn(window, 'scrollTo').mockImplementation(() => {})
  })

  it.each(V1_ROUTES)('a rota $path renderiza exatamente o DOM do estado v1-dark-premium', (route) => {
    const fragment = renderV1Route(route)

    expect(fragment).toMatchSnapshot()
  })

  it('o Footer usa o ano do relógio fixado, provando que a data do snapshot não vem do relógio real', () => {
    const fragment = renderV1Route(V1_ROUTES[0])

    expect(fragment.querySelector('footer').textContent).toContain('© 2030 Misha')
  })

  it('nenhum src de imagem no snapshot carrega caminho absoluto de disco', () => {
    const sources = V1_ROUTES.flatMap((route) => {
      const fragment = renderV1Route(route)
      return [...fragment.querySelectorAll('[src]')].map((element) => element.getAttribute('src'))
    })

    expect(sources.length).toBeGreaterThan(0)
    sources.forEach((source) => {
      expect(source).not.toMatch(/^[A-Za-z]:|\/@fs\/|\\|Users/)
    })
  })
})

describe('congelamento da v1 - tailwind.config.js', () => {
  it('theme.extend sem as chaves i2 permanece igual ao da v1', () => {
    expect(v1ThemeExtend(tailwindConfig)).toMatchSnapshot()
  })

  it('content permanece igual ao da v1', () => {
    expect(tailwindConfig.content).toMatchSnapshot()
  })

  it('plugins permanece igual ao da v1', () => {
    expect(tailwindConfig.plugins).toMatchSnapshot()
  })

  it('as chaves de primeiro nível da config e de theme permanecem as da v1', () => {
    expect({
      config: Object.keys(tailwindConfig).sort(),
      theme: Object.keys(tailwindConfig.theme).sort(),
    }).toMatchSnapshot()
  })

  it('não define theme.screens, prefix, important, darkMode nem corePlugins', () => {
    expect(tailwindConfig.theme).not.toHaveProperty('screens')
    expect(tailwindConfig).not.toHaveProperty('prefix')
    expect(tailwindConfig).not.toHaveProperty('important')
    expect(tailwindConfig).not.toHaveProperty('darkMode')
    expect(tailwindConfig).not.toHaveProperty('corePlugins')
  })

  it('o filtro ignora chaves i2 adicionadas em qualquer nível', () => {
    const extend = structuredClone(tailwindConfig.theme.extend)
    extend.colors.i2 = { canvas: '#000000', ink: { DEFAULT: '#ffffff' } }
    extend.colors.surface.i2Tone = '#123456'
    extend.fontFamily['i2-display'] = ['Fraunces', 'serif']
    extend.fontSize['i2-hero'] = ['5rem', { lineHeight: '1' }]
    extend.keyframes['i2-rise'] = { '0%': { opacity: '0' } }
    extend.transitionDuration = { 'i2-fast': '120ms' }
    extend.i2Tokens = { any: 'value' }

    expect(v1ThemeExtend({ theme: { extend } })).toEqual(v1ThemeExtend(tailwindConfig))
  })

  it('o filtro preserva mudanças em chaves que não são i2', () => {
    const changedValue = structuredClone(tailwindConfig.theme.extend)
    changedValue.colors.canvas = '#000000'
    const addedKey = structuredClone(tailwindConfig.theme.extend)
    addedKey.colors.brand = '#ff0000'
    const removedKey = structuredClone(tailwindConfig.theme.extend)
    delete removedKey.spacing.nav
    removedKey.spacing['i2-nav'] = '4rem'

    const original = v1ThemeExtend(tailwindConfig)

    expect(v1ThemeExtend({ theme: { extend: changedValue } })).not.toEqual(original)
    expect(v1ThemeExtend({ theme: { extend: addedKey } })).not.toEqual(original)
    expect(v1ThemeExtend({ theme: { extend: removedKey } })).not.toEqual(original)
  })
})
