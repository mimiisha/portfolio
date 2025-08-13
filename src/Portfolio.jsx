import React from "react"
import ProjectCard from "./ProjectCard"
import homeImageIcone from "./imgs/homeImageIcone.jpeg"

const Portfolio = () => {
    const projects = [
        {
            image: homeImageIcone,
            title: "Landing Page",
            description: "Primeiro projeto de uma landing page responsiva, utilizando HTML e CSS. Aprendizado de boas práticas de desenvolvimento web e design responsivo. - 2021"
        },
        {
            image: homeImageIcone,
            title: "Nome do Projeto 2",
            description: "Descrição completa do projeto e tecnologias utilizadas."
        },
        {
            image: homeImageIcone,
            title: "Nome do Projeto 3",
            description: "Descrição completa do projeto e tecnologias utilizadas."
        }
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
                />
            ))}
        </div>
    )
}

export default Portfolio