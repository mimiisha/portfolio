import React from "react"
import { MagnifyingGlassIcon } from "@phosphor-icons/react"

const CoursesCard = ({ image, date, category, title, delay, linkCertificado }) => {
    return (
        <li data-aos="fade-up" data-aos-delay={delay} className="h-full">
            <article className="card card-interactive group flex h-full flex-col has-[a:focus-visible]:border-action/40">
                <div className="aspect-[16/10] w-full overflow-hidden border-b border-line-subtle bg-surface-raised">
                    <img
                        src={image}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover object-top transition-transform duration-500 ease-out-quart motion-safe:group-hover:scale-[1.03]"
                    />
                </div>
                <div className="flex flex-1 items-end justify-between gap-4 p-5">
                    <div className="min-w-0">
                        <p className="flex flex-wrap items-center gap-x-2 text-caption text-content-secondary">
                            <span>{date}</span>{" "}
                            <span aria-hidden="true">•</span>{" "}
                            <span>{category}</span>
                        </p>
                        <h3 className="mt-2 font-display text-title-sm font-semibold text-content">{title}</h3>
                    </div>
                    <a
                        href={linkCertificado}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-icon shrink-0 before:absolute before:inset-0 before:rounded-card"
                    >
                        <MagnifyingGlassIcon size={20} weight="bold" aria-hidden="true" focusable="false" />
                        <span className="sr-only">Ver certificado do curso {title} (abre em nova aba)</span>
                    </a>
                </div>
            </article>
        </li>
    )
}

export default CoursesCard
