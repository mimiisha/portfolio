import React from "react"
import { MagnifyingGlassIcon } from "@phosphor-icons/react"

const CoursesCard = ({ image, date, category, title, delay, linkCertificado }) => {
    return (
        <div
            className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
            data-aos="fade-up"
            data-aos-delay={delay}
        >
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-300 group-hover:scale-105"
                style={{
                    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.3)), url(${image})`,
                }}
            ></div>

            <div className="absolute bottom-0 p-4 text-white z-10">
                <div className="text-sm opacity-80 flex items-center gap-2">
                    <span>{date}</span>
                    <span>•</span>
                    <span>{category}</span>
                </div>
                <h2 className="text-lg font-semibold">{title}</h2>
            </div>

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition"></div>

            <a
                href={linkCertificado}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 p-2 rounded-full text-principalText hover:text-gray-300 transition z-20"
            >
                <MagnifyingGlassIcon size={24} weight="bold" />
            </a>
        </div>
    )
}

export default CoursesCard