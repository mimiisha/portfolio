import React, { useRef } from "react"
import { LogoInsta, LogoLinkedin, LogoZap } from "./svgs/Images"
import emailjs from '@emailjs/browser'

const Home = () => {
    const form = useRef()

    const enviarEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_sy1h11w', 'template_pygkxlp', form.current, 'EJ9jNFgI_lFBXwS_r')
            .then((result) => {
                alert('Mensagem enviada!')
                form.current.reset()
            }, (error) => {
                alert('Erro ao enviar, tente novamente')
            })
    }

    return (
        <div>
            <div className="my-10 mx-16 flex justify-center flex-col items-center gap-10 font-semibold text-2xl md:text-4xl">
                Minhas Redes
                <div className="flex gap-24">
                    <a href="https://wa.me/5511950776623?text=Ol%C3%A1%2C%20Misha!%20Gostaria%20de%20conversar%20sobre%2E%2E%2E" target="_blank" rel="noopener noreferrer">
                        <LogoZap className="w-10 h-10 md:w-14 md:h-14 hover:cursor-pointer" />
                    </a>
                    <a href="https://www.instagram.com/imnotmiisha?igsh=MWxjZG5yejJheGVteQ==" target="_blank" rel="noopener noreferrer">
                        <LogoInsta className="w-10 h-10 md:w-14 md:h-14 hover:cursor-pointer" />
                    </a>
                    <a href="https://www.linkedin.com/in/danielle-cordeiro-%E3%85%A4-33543b250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                        <LogoLinkedin className="w-10 h-10 md:w-14 md:h-14 hover:cursor-pointer" />
                    </a>

                </div>
            </div>
            <div className="bg-black px-24 py-12 flex flex-col text-white justify-center items-center gap-6">
                <section id="contactFormContainer" className="flex flex-col gap-4 h-auto w-[350px] md:w-[800px] p-4">
                    <form ref={form} onSubmit={enviarEmail} className="flex flex-col gap-4">
                        <h2 className="font-semibold text-lg md:text-2xl flex justify-center md:mb-2">Entre em contato</h2>
                        <div className="mb-2 flex flex-col md:flex-row gap-4 md:gap-10 justify-center">
                            <div className="w-full input-group">
                                <label for="name">Nome</label>
                                <input type="text" id="name" name="name" className="py-2 px-4 rounded-xl text-black w-full" placeholder="Digite seu nome" required />
                            </div>
                            <div class="input-group input-group" className="w-full input-group">
                                <label for="email">E-mail</label>
                                <input type="text" id="email" name="email" className="py-2 px-4 rounded-xl text-black w-full" placeholder="Digite seu e-mail" required />
                            </div>
                        </div>
                        <div>
                            <label className="input-group" for="subject">Assunto</label>
                            <input type="text" className="py-2 px-4 rounded-xl text-black w-full" placeholder="Digite o assunto" name="subject" required />
                        </div>
                        <div>
                            <label className="input-group" for="message">Mensagem</label>
                            <textarea className="py-2 px-4 rounded-xl text-black w-full h-[100px] min-h-[40px]" placeholder="Digite a mensagem" rows="5" name="message" required />
                        </div>
                        <div className="flex justify-center items-center mt-4">
                            <button type="submit" className="py-2 px-4 rounded-xl w-60 bg-cyan-600 text-white font-medium">Enviar mensagem</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Home