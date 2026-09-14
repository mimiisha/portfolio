import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

export const EMAILJS_SERVICE_ID = "service_sy1h11w"
export const EMAILJS_TEMPLATE_ID = "template_pygkxlp"
export const EMAILJS_PUBLIC_KEY = "n8Q7mYckyUsnvB9Bt"

const EMPTY_VALUES = { name: "", email: "", subject: "", message: "" }

export default function useContactForm({
  successText = "Mensagem enviada com sucesso!",
  errorText = "Erro ao enviar, tente novamente.",
} = {}) {
  const formRef = useRef(null)
  const sendingRef = useRef(false)
  const [values, setValues] = useState(EMPTY_VALUES)
  const [status, setStatus] = useState("idle")
  const [feedback, setFeedback] = useState(null)

  const isValid =
    values.name.trim() !== "" &&
    values.email.trim() !== "" &&
    values.subject.trim() !== "" &&
    values.message.trim() !== ""

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (feedback) {
      setFeedback(null)
      setStatus("idle")
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!isValid || status === "sending" || sendingRef.current) return

    sendingRef.current = true
    setFeedback(null)
    setStatus("sending")

    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
    } catch {
      sendingRef.current = false
      setFeedback({ type: "error", text: errorText })
      setStatus("error")
      return
    }

    sendingRef.current = false
    setFeedback({ type: "success", text: successText })
    formRef.current?.reset()
    setValues(EMPTY_VALUES)
    setStatus("success")
  }

  return { formRef, values, handleChange, handleSubmit, isValid, status, feedback }
}
