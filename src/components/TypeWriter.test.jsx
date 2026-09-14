import React from 'react'
import { describe, it, expect, vi, beforeEach, afterEach, beforeAll, afterAll } from 'vitest'
import { render, act } from '@testing-library/react'
import TypeWriter from './TypeWriter'

const PART_1 = 'Olá, eu sou '
const PART_2 = 'Misha'
const FULL_TEXT = PART_1 + PART_2
const SPEED = 50
const STEP = 10
const ENOUGH_TIME = 5_000

const advance = (ms, onStep = () => {}) => {
  for (let elapsed = 0; elapsed < ms; elapsed += STEP) {
    act(() => {
      vi.advanceTimersByTime(STEP)
    })
    onStep()
  }
}

const typedText = (container) => {
  const visible = container.cloneNode(true)
  visible.querySelectorAll('.sr-only').forEach((node) => node.remove())
  return visible.textContent
}

const notPrefixOfFullText =(texts) => texts.filter((text) => !FULL_TEXT.startsWith(text))

const mediaQueryListeners = new Set()
let reduceMotion = false

const setReducedMotion = (value) => {
  reduceMotion = value
  mediaQueryListeners.forEach((listener) => listener({ matches: value }))
}

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    writable: true,
    value: (query) => ({
      media: query,
      get matches() {
        return query.includes('prefers-reduced-motion') && reduceMotion
      },
      addEventListener: (type, listener) => mediaQueryListeners.add(listener),
      removeEventListener: (type, listener) => mediaQueryListeners.delete(listener),
      addListener: (listener) => mediaQueryListeners.add(listener),
      removeListener: (listener) => mediaQueryListeners.delete(listener),
    }),
  })
})

afterAll(() => {
  delete window.matchMedia
})

afterEach(() => {
  setReducedMotion(false)
})

describe('TypeWriter', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  it('exibe exatamente textPart1 + textPart2 depois que a digitação termina', () => {
    const { container } = render(
      <TypeWriter textPart1={PART_1} textPart2={PART_2} speed={SPEED} />
    )

    advance(ENOUGH_TIME)

    expect(typedText(container)).toBe(FULL_TEXT)
  })

  it('começa vazio e só exibe prefixos do texto completo durante a digitação', () => {
    const { container } = render(
      <TypeWriter textPart1={PART_1} textPart2={PART_2} speed={SPEED} />
    )
    const seen = []
    expect(typedText(container)).toBe('')

    advance(ENOUGH_TIME, () => seen.push(typedText(container)))

    expect(notPrefixOfFullText(seen)).toEqual([])
    expect(seen.at(-1)).toBe(FULL_TEXT)
  })

  it('em React.StrictMode exibe exatamente o texto completo, sem duplicar nem embaralhar', () => {
    const { container } = render(
      <React.StrictMode>
        <TypeWriter textPart1={PART_1} textPart2={PART_2} speed={SPEED} />
      </React.StrictMode>
    )
    const seen = []

    advance(ENOUGH_TIME, () => seen.push(typedText(container)))

    expect(notPrefixOfFullText(seen)).toEqual([])
    expect(typedText(container)).toBe(FULL_TEXT)
  })

  it('ao trocar os textos durante a digitação da segunda parte exibe só o texto novo', () => {
    const { container, rerender } = render(
      <TypeWriter textPart1={PART_1} textPart2={PART_2} speed={SPEED} />
    )
    advance(PART_1.length * SPEED + 300)
    expect(typedText(container).length).toBeGreaterThan(PART_1.length)

    rerender(<TypeWriter textPart1="Hello, I am " textPart2="Dani" speed={SPEED} />)
    advance(ENOUGH_TIME)

    expect(typedText(container)).toBe('Hello, I am Dani')
  })

  it('não deixa timers pendentes ao desmontar no meio da primeira parte', () => {
    const { container, unmount } = render(
      <TypeWriter textPart1={PART_1} textPart2={PART_2} speed={SPEED} />
    )
    advance(SPEED * 3)
    expect(typedText(container).length).toBeGreaterThan(0)
    expect(typedText(container).length).toBeLessThan(PART_1.length)

    unmount()

    expect(vi.getTimerCount()).toBe(0)
  })

  it('não deixa timers pendentes ao desmontar na pausa entre as partes', () => {
    const { container, unmount } = render(
      <TypeWriter textPart1={PART_1} textPart2={PART_2} speed={SPEED} />
    )
    advance(PART_1.length * SPEED + SPEED + STEP)
    expect(typedText(container)).toBe(PART_1)

    unmount()

    expect(vi.getTimerCount()).toBe(0)
  })

  it('não deixa timers pendentes ao desmontar no meio da segunda parte', () => {
    const { container, unmount } = render(
      <TypeWriter textPart1={PART_1} textPart2={PART_2} speed={SPEED} />
    )
    advance(PART_1.length * SPEED + 300)
    expect(typedText(container).length).toBeGreaterThan(PART_1.length)
    expect(typedText(container).length).toBeLessThan(FULL_TEXT.length)

    unmount()

    expect(vi.getTimerCount()).toBe(0)
  })

  it('não deixa timers pendentes ao desmontar depois de terminar', () => {
    const { container, unmount } = render(
      <TypeWriter textPart1={PART_1} textPart2={PART_2} speed={SPEED} />
    )
    advance(ENOUGH_TIME)
    expect(typedText(container)).toBe(FULL_TEXT)

    unmount()

    expect(vi.getTimerCount()).toBe(0)
  })

  it('não mantém timer nenhum rodando depois de terminar, mesmo montado', () => {
    const { container } = render(
      <TypeWriter textPart1={PART_1} textPart2={PART_2} speed={SPEED} />
    )
    advance(ENOUGH_TIME)
    expect(typedText(container)).toBe(FULL_TEXT)

    expect(vi.getTimerCount()).toBe(0)
  })

})

describe('TypeWriter com prefers-reduced-motion: reduce', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.spyOn(console, 'warn').mockImplementation(() => {})
    setReducedMotion(true)
  })

  it('exibe o texto completo já na primeira renderização', () => {
    const { container } = render(
      <TypeWriter textPart1={PART_1} textPart2={PART_2} speed={SPEED} />
    )

    expect(typedText(container)).toBe(FULL_TEXT)
  })

  it('não agenda nenhum timer de digitação', () => {
    render(<TypeWriter textPart1={PART_1} textPart2={PART_2} speed={SPEED} />)

    expect(vi.getTimerCount()).toBe(0)
  })

  it('mantém o texto completo estável com o passar do tempo', () => {
    const { container } = render(
      <TypeWriter textPart1={PART_1} textPart2={PART_2} speed={SPEED} />
    )
    const seen = []

    advance(SPEED * 10, () => seen.push(typedText(container)))

    expect(seen.every((text) => text === FULL_TEXT)).toBe(true)
  })
})
