import React, { useRef, useState } from "react"
import { CheckCircleIcon, WarningCircleIcon } from "@phosphor-icons/react"
import { LogoInsta, LogoLinkedin, LogoZap } from "../svgs/Images"
import emailjs from '@emailjs/browser'
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from "../hooks/useContactForm"

const socialTileClass = "inline-flex h-14 w-14 items-center justify-center rounded-card border border-line bg-surface text-highlight transition-[border-color,background-color,box-shadow] duration-200 ease-out-quart hover:border-highlight/60 hover:bg-surface-raised hover:shadow-glow-highlight-sm active:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"

const Contact = () => {
    const form = useRef()
    const [feedback, setFeedback] = useState(null)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
        if (feedback) setFeedback(null)
    }

    const isFormValid = () => {
        return (
            formData.name.trim() !== "" &&
            formData.email.trim() !== "" &&
            formData.subject.trim() !== "" &&
            formData.message.trim() !== ""
        )
    }

    const enviarEmail = (e) => {
        e.preventDefault()
        setFeedback(null)

        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, EMAILJS_PUBLIC_KEY)
            .then(() => {
                setFeedback({ type: "success", text: "Mensagem enviada com sucesso!" })
                form.current.reset()
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                })
            })
            .catch(() => {
                setFeedback({ type: "error", text: "Erro ao enviar, tente novamente." })
            })
    }

    return (
        <section className="page-container section-y">
            <div className="flex flex-col gap-3">
                <span className="eyebrow" aria-hidden="true"></span>
                <h1 className="heading-section">Contato</h1>
            </div>
            <div className="mt-10 grid gap-10 md:mt-14 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-4">
                    <h2 className="font-display text-title font-semibold text-content">Minhas Redes</h2>
                    <div className="mt-5 flex gap-3">
                        <a href="https://wa.me/5511950776623?text=Ol%C3%A1%2C%20Misha!%20Gostaria%20de%20conversar%20sobre%2E%2E%2E" target="_blank" rel="noopener noreferrer" className={socialTileClass}>
                            <LogoZap className="h-7 w-7" aria-hidden="true" focusable="false" />
                            <span className="sr-only">WhatsApp (abre em nova aba)</span>
                        </a>
                        <a href="https://www.instagram.com/imnotmiisha?igsh=MWxjZG5yejJheGVteQ==" target="_blank" rel="noopener noreferrer" className={socialTileClass}>
                            <LogoInsta className="h-7 w-7" aria-hidden="true" focusable="false" />
                            <span className="sr-only">Instagram (abre em nova aba)</span>
                        </a>
                        <a href="https://www.linkedin.com/in/danielle-cordeiro-%E3%85%A4-33543b250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className={socialTileClass}>
                            <LogoLinkedin className="h-7 w-7" aria-hidden="true" focusable="false" />
                            <span className="sr-only">LinkedIn (abre em nova aba)</span>
                        </a>
                    </div>
                </div>

                <section className="card p-5 sm:p-8 lg:col-span-8">
                    <form ref={form} onSubmit={enviarEmail} className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        <h2 className="font-display text-title font-semibold text-content md:col-span-2">
                            Envie uma mensagem
                        </h2>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="field-label">Nome</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                autoComplete="name"
                                className="field-input"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="field-label">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                autoComplete="email"
                                className="field-input"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col gap-2 md:col-span-2">
                            <label htmlFor="subject" className="field-label">Assunto</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="field-input"
                                required
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col gap-2 md:col-span-2">
                            <label htmlFor="message" className="field-label">Mensagem</label>
                            <textarea
                                id="message"
                                name="message"
                                className="field-input min-h-[9.5rem] resize-y"
                                required
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>

                        <p
                            role="status"
                            className={`flex items-center gap-2 rounded-control border px-4 py-3 text-body font-medium empty:sr-only md:col-span-2 ${feedback?.type === "error" ? "border-feedback-error/40 bg-feedback-error/10 text-feedback-error" : "border-feedback-success/40 bg-feedback-success/10 text-feedback-success"}`}
                        >
                            {feedback && (
                                <>
                                    {feedback.type === "success"
                                        ? <CheckCircleIcon size={20} weight="fill" className="shrink-0" aria-hidden="true" focusable="false" />
                                        : <WarningCircleIcon size={20} weight="fill" className="shrink-0" aria-hidden="true" focusable="false" />}
                                    {feedback.text}
                                </>
                            )}
                        </p>

                        <div className="md:col-span-2">
                            <button
                                type="submit"
                                className="btn btn-primary btn-lg w-full sm:w-auto sm:min-w-[14rem]"
                                disabled={!isFormValid()}
                            >
                                Enviar mensagem
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </section>
    )
}

export default Contact
