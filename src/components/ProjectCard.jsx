import React from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import { LogoGit, LogoInternet } from "../svgs/Images"

AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
})

const ProjectCard = ({ image, title, description, delay, linkInternet, linkGitHub }) => {
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
        <p className="text-principalText text-base opacity-80 flex-grow">{description}</p>
      </div>
      <div className='flex my-3 mx-5 gap-4'>
        <a href={linkGitHub} target="_blank" rel="noopener noreferrer">
          <LogoGit className='w-6 h-6 text-primaryButton hover:text-hoverPB hover:cursor-pointer transition-all duration-300' />
        </a>
        <a href={linkInternet} target="_blank" rel="noopener noreferrer">
          <LogoInternet className='w-6 h-6 text-primaryButton hover:text-hoverPB hover:cursor-pointer' />
        </a>
      </div>
    </div>
  )
}

export default ProjectCard