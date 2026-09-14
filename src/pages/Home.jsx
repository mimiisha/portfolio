import React from "react"
import homeImage from "../imgs/homeImage.png"
import { DownloadSimpleIcon, CodeIcon } from "@phosphor-icons/react"
import TypeWriter from "../components/TypeWriter"

const Home = () => {
    return (
        <section className="relative isolate overflow-hidden">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow"></div>
            <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-1/2 bg-hero-grid bg-cell [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] lg:block"></div>
            <div className="page-container grid items-center gap-12 py-16 md:py-24 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-12 lg:py-16">
                <div className="flex flex-col lg:col-span-7">
                    <h1 className="font-display text-title font-medium text-content-secondary md:text-greeting">Olá, eu sou a Misha!</h1>
                    <h2 lang="en" className="mt-3 min-h-[2em] font-display text-display-sm font-extrabold [overflow-wrap:anywhere] md:text-display-md lg:text-display-lg">
                        <TypeWriter
                            textPart1="WEB "
                            textPart2="DEVELOPER"
                            speed={150}
                            breakBeforePart2
                        />
                    </h2>
                    <p className="mt-6 max-w-measure text-body-lg text-content-secondary md:text-lead">
                        Aqui você encontra meus projetos acadêmicos e pessoais, desenvolvidos para implementar e consolidar meus conhecimentos técnicos.<br />
                        Sinta-se à vontade para explorar, conhecer meu processo criativo e ver como tecnologia e criatividade se unem no meu trabalho.
                    </p>

                    <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
                        <a
                            href="/Currículo - Danielle Cordeiro.pdf"
                            download
                            className="btn btn-primary btn-lg w-full sm:w-auto"
                        >
                            Meu currículo<span className="sr-only"> (download em PDF)</span> <DownloadSimpleIcon className="h-5 w-5 shrink-0" weight="bold" aria-hidden="true" focusable="false" />
                        </a>
                        <a
                            href="https://github.com/mimiisha"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-ghost btn-lg w-full sm:w-auto"
                        >
                            Projetos<span className="sr-only"> no GitHub (abre em nova aba)</span> <CodeIcon className="h-5 w-5 shrink-0" weight="bold" aria-hidden="true" focusable="false" />
                        </a>
                    </div>
                </div>

                <div className="lg:col-span-5">
                    <img
                        src={homeImage}
                        alt=""
                        className="mx-auto h-auto w-full max-w-[20rem] motion-safe:animate-enter-up md:max-w-[26rem] lg:max-w-none"
                    />
                </div>
            </div>
        </section>
    )
}

export default Home
