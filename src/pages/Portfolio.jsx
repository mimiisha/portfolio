import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { useReducedMotion } from "framer-motion"
import ProjectCard from "../components/ProjectCard"
import landingPage from "../imgs/landingPage.png"
import conversormoedas from "../imgs/conversormoedas.png"
import joguinhonsecreto from "../imgs/joguinhonsecreto.png"
import calculadora from "../imgs/calculadora.png"
import jogodavelha from "../imgs/jogodavelha.png"
import desconectaai from "../imgs/desconectaai.png"
import cardapio from "../imgs/cardapio.png"

const Portfolio = () => {
    const shouldReduceMotion = useReducedMotion()

    useEffect(() => {
        window.scrollTo(0, 0)
        AOS.init({
            duration: 600,
            easing: 'ease-out-quart',
            once: true,
            offset: 80,
            disable: shouldReduceMotion === true,
        })
    }, [shouldReduceMotion])

    const projects = [
        {
            image: landingPage,
            title: "Landing Page",
            description: "Primeiro projeto de uma landing page responsiva, utilizando HTML e CSS. Aprendizado de boas práticas de desenvolvimento web e design responsivo. - 2021",
            linkInternet: "https://mishalandingpage.vercel.app/",
            linkGitHub: "https://github.com/mimiisha/myfirstlandingpage"
        },
        {
            image: joguinhonsecreto,
            title: "Joguinho do N° Secreto",
            description: "Projeto criado durante estudos na Alura, combinando HTML, CSS e JavaScript. Inclui recurso de acessibilidade com a biblioteca ResponsiveVoice.js, que lê o conteúdo da página em voz alta, proporcionando uma experiência mais inclusiva para todos os usuários. - 2024",
            linkInternet: "https://joguinhonsecreto.vercel.app/",
            linkGitHub: "https://github.com/mimiisha/Joguinho-de-n-mero-secreto"
        },
        {
            image: calculadora,
            title: "Calculadora React",
            description: "Calculadora interativa desenvolvida com React JSX, utilizando Hooks para gerenciamento de estado. Features: histórico de operações no display, design responsivo com gradiente animado e teclado virtual completo. Projeto focado em aprimorar lógica de programação e componentização em React. - 2024",
            linkInternet: "https://mishacalculadora.vercel.app/",
            linkGitHub: "https://github.com/mimiisha/calculadora"
        },
        {
            image: conversormoedas,
            title: "Conversor de Moedas",
            description: "Projeto de um conversor de moedas utilizando React JSX e Tailwind CSS. Aprendizado de manipulação de DOM, requisições a APIs e lógica de programação. - 2025",
            linkInternet: "https://meuconversordemoedas.vercel.app/",
            linkGitHub: "https://github.com/mimiisha/conversormoedas"
        },
        {
            image: jogodavelha,
            title: "Jogo da Velha com IA",
            description: "Jogo da Velha interativo desenvolvido com React JSX e Tailwind CSS, oferecendo dois modos de jogo: multiplayer local e contra a máquina com três níveis de dificuldade (fácil, médio e difícil). Destaque para a implementação do algoritmo Minimax no nível difícil, tornando-a praticamente imbatível. O projeto inclui uma tela de resultado em full-screen e foi desenvolvido com foco em gerenciamento de estado complexo. - 2025",
            linkInternet: "https://joguinhodavelha.vercel.app/",
            linkGitHub: "https://github.com/mimiisha/jogodavelha"
        },
         {
            image: desconectaai,
            title: "Desconecta AI",
            description: "Projeto desenvolvido para obtenção de nota na faculdade, que oferece ferramentas para gestão de tempo, pausas programadas em full-screen, testes e documentários que auxiliam o usuário a reduzir o tempo de tela excessivo. - 2025",
            linkInternet: "https://desconecta-ai.vercel.app/",
            linkGitHub: "https://github.com/mimiisha/projeto-desconecta.ai"
        },
        {
            image: cardapio,
            title: "Cardápio Delícias da Cá",
            description: "Desenvolvimento de um cardápio digital para auxiliar uma pequena empreendedora na divulgação dos produtos e no gerenciamento de pedidos. A plataforma foi desenvolvida com React, JSX e Tailwind CSS, utilizando o Firebase como banco de dados, com foco em uma experiência intuitiva, responsiva e prática para clientes e administradora. — 2026",
            linkInternet: "https://cardapio-deliciasca.vercel.app/",
            linkGitHub: "https://github.com/mimiisha/cardapio-deliciasca"
        },
    ]

    return (
        <section className="page-container section-y">
            <div className="flex flex-col gap-3">
                <span className="eyebrow" aria-hidden="true">{String(projects.length).padStart(2, "0")}</span>
                <h1 className="heading-section">Projetos</h1>
            </div>
            <ul role="list" className="mt-10 grid gap-6 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        delay={(index % 3) * 80}
                        linkGitHub={project.linkGitHub}
                        linkInternet={project.linkInternet}
                    />
                ))}
            </ul>
        </section>
    )
}

export default Portfolio