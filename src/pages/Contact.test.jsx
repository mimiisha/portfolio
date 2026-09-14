import React from 'react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, act } from '@testing-library/react'
import emailjs from '@emailjs/browser'
import Contact from './Contact'

vi.mock('@emailjs/browser', () => ({
  default: { sendForm: vi.fn() },
}))

const SUCCESS_TEXT = 'Mensagem enviada com sucesso!'
const ERROR_TEXT = 'Erro ao enviar, tente novamente.'

const VALID_INPUT = {
  Nome: 'Ana Souza',
  'E-mail': 'ana@example.com',
  Assunto: 'Proposta',
  Mensagem: 'Olá, gostaria de conversar.',
}

const fillForm = () => {
  Object.entries(VALID_INPUT).forEach(([label, value]) => {
    fireEvent.change(screen.getByLabelText(label), { target: { value } })
  })
}

const getSubmitButton = () => screen.getByRole('button', { name: 'Enviar mensagem' })

const submit = async () => {
  await act(async () => {
    fireEvent.click(getSubmitButton())
  })
}

const fillAndSubmit = async () => {
  fillForm()
  await submit()
}

describe('Contact - envio do formulário', () => {
  beforeEach(() => {
    emailjs.sendForm.mockReset()
  })

  it('mantém a região role="status" montada e vazia antes de qualquer envio', () => {
    render(<Contact />)

    expect(screen.getByRole('status').textContent).toBe('')
  })

  it('chama sendForm com o service id, o template id, o próprio formulário e a public key', async () => {
    emailjs.sendForm.mockResolvedValue({ status: 200 })
    render(<Contact />)

    await fillAndSubmit()

    expect(emailjs.sendForm).toHaveBeenCalledTimes(1)
    expect(emailjs.sendForm).toHaveBeenCalledWith(
      'service_sy1h11w',
      'template_pygkxlp',
      getSubmitButton().form,
      'n8Q7mYckyUsnvB9Bt'
    )
  })

  it('não envia enquanto algum campo obrigatório está vazio', async () => {
    emailjs.sendForm.mockResolvedValue({ status: 200 })
    render(<Contact />)
    fireEvent.change(screen.getByLabelText('Nome'), { target: { value: 'Ana' } })
    fireEvent.change(screen.getByLabelText('E-mail'), { target: { value: 'ana@example.com' } })
    fireEvent.change(screen.getByLabelText('Assunto'), { target: { value: '   ' } })
    fireEvent.change(screen.getByLabelText('Mensagem'), { target: { value: 'Oi' } })

    await submit()

    expect(emailjs.sendForm).not.toHaveBeenCalled()
  })

  it('exibe a mensagem de sucesso no role="status" após envio bem-sucedido', async () => {
    emailjs.sendForm.mockResolvedValue({ status: 200 })
    render(<Contact />)

    await fillAndSubmit()

    expect(screen.getByRole('status').textContent).toBe(SUCCESS_TEXT)
  })

  it('mantém a mensagem de sucesso depois de 10 segundos sem interação', async () => {
    vi.useFakeTimers()
    emailjs.sendForm.mockResolvedValue({ status: 200 })
    render(<Contact />)
    await fillAndSubmit()
    expect(screen.getByRole('status').textContent).toBe(SUCCESS_TEXT)

    act(() => {
      vi.advanceTimersByTime(10_000)
    })

    expect(screen.getByRole('status').textContent).toBe(SUCCESS_TEXT)
  })

  it('limpa os campos após envio bem-sucedido', async () => {
    emailjs.sendForm.mockResolvedValue({ status: 200 })
    render(<Contact />)

    await fillAndSubmit()

    Object.keys(VALID_INPUT).forEach((label) => {
      expect(screen.getByLabelText(label).value).toBe('')
    })
  })

  it('remove a mensagem de sucesso quando o usuário digita em um campo', async () => {
    emailjs.sendForm.mockResolvedValue({ status: 200 })
    render(<Contact />)
    await fillAndSubmit()
    expect(screen.getByRole('status').textContent).toBe(SUCCESS_TEXT)

    fireEvent.change(screen.getByLabelText('Nome'), { target: { value: 'B' } })

    expect(screen.getByRole('status').textContent).toBe('')
  })

  it('exibe a mensagem de erro no role="status" quando o envio falha', async () => {
    emailjs.sendForm.mockRejectedValue(new Error('network'))
    render(<Contact />)

    await fillAndSubmit()

    expect(screen.getByRole('status').textContent).toBe(ERROR_TEXT)
  })

  it('mantém a mensagem de erro depois de 10 segundos sem interação', async () => {
    vi.useFakeTimers()
    emailjs.sendForm.mockRejectedValue(new Error('network'))
    render(<Contact />)
    await fillAndSubmit()

    act(() => {
      vi.advanceTimersByTime(10_000)
    })

    expect(screen.getByRole('status').textContent).toBe(ERROR_TEXT)
  })

  it('preserva o que foi digitado quando o envio falha', async () => {
    emailjs.sendForm.mockRejectedValue(new Error('network'))
    render(<Contact />)

    await fillAndSubmit()

    Object.entries(VALID_INPUT).forEach(([label, value]) => {
      expect(screen.getByLabelText(label).value).toBe(value)
    })
  })

  it('remove a mensagem de erro quando o usuário digita na mensagem', async () => {
    emailjs.sendForm.mockRejectedValue(new Error('network'))
    render(<Contact />)
    await fillAndSubmit()
    expect(screen.getByRole('status').textContent).toBe(ERROR_TEXT)

    fireEvent.change(screen.getByLabelText('Mensagem'), { target: { value: 'Texto novo' } })

    expect(screen.getByRole('status').textContent).toBe('')
  })

  it('remove o feedback anterior assim que um novo envio começa', async () => {
    emailjs.sendForm.mockRejectedValueOnce(new Error('network'))
    emailjs.sendForm.mockReturnValueOnce(new Promise(() => {}))
    render(<Contact />)
    await fillAndSubmit()
    expect(screen.getByRole('status').textContent).toBe(ERROR_TEXT)

    await submit()

    expect(emailjs.sendForm).toHaveBeenCalledTimes(2)
    expect(screen.getByRole('status').textContent).toBe('')
  })

  it.each([
    ['sucesso', () => emailjs.sendForm.mockResolvedValue({ status: 200 })],
    ['erro', () => emailjs.sendForm.mockRejectedValue(new Error('network'))],
  ])('no feedback de %s o ícone fica oculto de tecnologia assistiva', async (_, arrangeSendForm) => {
    arrangeSendForm()
    render(<Contact />)

    await fillAndSubmit()

    const icons = screen.getByRole('status').querySelectorAll('svg')
    expect(icons).toHaveLength(1)
    expect(icons[0].getAttribute('aria-hidden')).toBe('true')
  })
})
