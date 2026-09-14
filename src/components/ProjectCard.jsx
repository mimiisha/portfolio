import React from 'react'
import "aos/dist/aos.css"
import { LogoGit, LogoInternet } from "../svgs/Images"

const ProjectCard = ({ image, title, description, delay, linkInternet, linkGitHub }) => {
  return (
    <li data-aos="fade-up" data-aos-delay={delay} className="h-full">
      <article className="card group flex h-full flex-col has-[a:focus-visible]:border-action/40">
        <div className="aspect-video w-full overflow-hidden border-b border-line-subtle bg-surface-raised">
          <img
            src={image}
            alt={`Captura de tela do projeto ${title}`}
            className="h-full w-full object-cover transition-transform duration-500 ease-out-quart motion-safe:group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h2 className="font-display text-title-sm font-bold text-content">{title}</h2>
          <p className="mt-3 flex-1 text-body text-content-secondary">{description}</p>
          <div className="mt-6 flex gap-2">
            <a href={linkGitHub} target="_blank" rel="noopener noreferrer" className="btn-icon">
              <LogoGit className="h-5 w-5" aria-hidden="true" focusable="false" />
              <span className="sr-only">Código do projeto {title} no GitHub (abre em nova aba)</span>
            </a>
            <a href={linkInternet} target="_blank" rel="noopener noreferrer" className="btn-icon">
              <LogoInternet className="h-5 w-5" aria-hidden="true" focusable="false" />
              <span className="sr-only">Site do projeto {title} (abre em nova aba)</span>
            </a>
          </div>
        </div>
      </article>
    </li>
  )
}

export default ProjectCard
