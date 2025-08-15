import React from "react"
import ProjectCard from "../components/ProjectCard"
import landingPage from "../imgs/landingPage.png"
import conversormoedas from "../imgs/conversormoedas.png"
import joguinhonsecreto from "../imgs/joguinhonsecreto.png"

const Portfolio = () => {
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
            image: conversormoedas,
            title: "Conversor de Moedas",
            description: "Projeto de um conversor de moedas utilizando HTML, CSS e JavaScript. Aprendizado de manipulação de DOM, requisições a APIs e lógica de programação. - 2025",
            linkInternet: "https://meuconversordemoedas.vercel.app/",
            linkGitHub: "https://github.com/mimiisha/conversormoedas"
        },
    ]

    return (
        <div className="bg-backgound grid grid-cols-1 md:grid-cols-3 gap-8 px-10 py-8 md:p-16 h-auto md:h-[calc(100vh-80px)]">
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    delay={index * 100}
                    linkGitHub={project.linkGitHub}
                    linkInternet={project.linkInternet}
                />
            ))}
        </div>
    )
}

export default Portfolio