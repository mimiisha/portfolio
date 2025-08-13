import React from 'react'
import AOS from "aos"
import "aos/dist/aos.css"

AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
})

const ProjectCard = ({ image, title, description, delay }) => {
  return (
    <div
      className="bg-bgSecondary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-details mb-2">{title}</h3>
        <p className="text-white opacity-80 flex-grow">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard