import React, { useRef, useState } from "react"
import { LogoInsta, LogoLinkedin, LogoZap } from "../svgs/Images"
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef()
    const [feedbackMessage, setFeedbackMessage] = useState("")

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

        emailjs.sendForm('service_sy1h11w', 'template_pygkxlp', form.current, 'EJ9jNFgI_lFBXwS_r')
            .then(() => {
                setFeedbackMessage("✅ Mensagem enviada com sucesso!")
                form.current.reset()
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                })
                setTimeout(() => setFeedbackMessage(""), 5000)
            })
            .catch(() => {
                setFeedbackMessage("❌ Erro ao enviar, tente novamente.")
                setTimeout(() => setFeedbackMessage(""), 5000)
            })
    }

    return (
        <div className="bg-backgound min-h-screen">
            <div className="pt-10 pb-10 mx-16 flex justify-center flex-col items-center gap-10 font-semibold text-2xl md:text-4xl text-details">
                Minhas Redes
                <div className="flex gap-24">
                    <a href="https://wa.me/5511950776623?text=Ol%C3%A1%2C%20Misha!%20Gostaria%20de%20conversar%20sobre%2E%2E%2E" target="_blank" rel="noopener noreferrer">
                        <LogoZap className="w-10 h-10 md:w-14 md:h-14 hover:cursor-pointer text-details hover:text-hoverDetail transition-all duration-300" />
                    </a>
                    <a href="https://www.instagram.com/imnotmiisha?igsh=MWxjZG5yejJheGVteQ==" target="_blank" rel="noopener noreferrer">
                        <LogoInsta className="w-10 h-10 md:w-14 md:h-14 hover:cursor-pointer text-details hover:text-hoverDetail transition-all duration-300" />
                    </a>
                    <a href="https://www.linkedin.com/in/danielle-cordeiro-%E3%85%A4-33543b250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                        <LogoLinkedin className="w-10 h-10 md:w-14 md:h-14 hover:cursor-pointer text-details hover:text-hoverDetail transition-all duration-300" />
                    </a>

                </div>
            </div>
            <div className="bg-bgSecondary px-24 py-12 flex flex-col text-details justify-center items-center gap-6 relative overflow-hidden mb-10">
                <div className="absolute top-0 left-0 right-0 h-12 
                 bg-gradient-to-b from-backgound/70 to-transparent 
                 backdrop-blur-sm"></div>
                <div className="absolute bottom-0 left-0 right-0 h-12 
                 bg-gradient-to-t from-backgound/70 to-transparent 
                 backdrop-blur-sm"></div>
                <section className="flex flex-col gap-4 h-auto w-[350px] md:w-[800px] p-4 relative z-10">
                    <form ref={form} onSubmit={enviarEmail} className="flex flex-col">
                        <h2 className="font-semibold text-lg md:text-2xl flex justify-center md:mb-2">
                            Envie uma mensagem
                        </h2>

                        <div className="flex flex-col md:flex-row md:gap-10 justify-center">
                            <div className="input-group flex-1">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="py-3 px-4 rounded-xl border-2 border-gray-300 text-black w-full focus:border-details"
                                    placeholder=" "
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <label htmlFor="name">Nome</label>
                            </div>

                            <div className="input-group flex-1">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="py-3 px-4 rounded-xl border-2 border-gray-300 text-black w-full focus:border-details"
                                    placeholder=" "
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <label htmlFor="email">E-mail</label>
                            </div>
                        </div>

                        <div className="input-group">
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="py-3 px-4 rounded-xl border-2 border-gray-300 text-black w-full focus:border-details"
                                placeholder=" "
                                required
                                value={formData.subject}
                                onChange={handleChange}
                            />
                            <label htmlFor="subject">Assunto</label>
                        </div>

                        <div className="input-group textarea-group">
                            <textarea
                                id="message"
                                name="message"
                                className="min-h-[150px]"
                                placeholder=" "
                                required
                            />
                            <label htmlFor="message">Mensagem</label>
                        </div>

                        {feedbackMessage && (
                            <p className={`text-center font-medium ${feedbackMessage.startsWith("✅") ? "text-green-600" : "text-red-600"}`}>
                                {feedbackMessage}
                            </p>
                        )}

                        <div className="flex justify-center items-center mt-4">
                            <button
                                type="submit"
                                className="py-3 px-6 rounded-full w-60 bg-details hover:bg-hoverDetail transition-all duration-300 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-details"
                                disabled={!isFormValid()}
                            >
                                Enviar mensagem
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Contact