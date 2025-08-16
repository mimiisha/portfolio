import React from 'react'
import "aos/dist/aos.css"
import { LogoGit, LogoInternet } from "../svgs/Images"

const ProjectCard = ({ image, title, description, delay, linkInternet, linkGitHub }) => {
  return (
    <div
      className="bg-bgSecondary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="aspect-video w-full overflow-hidden bg-gray-800">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-xl font-bold text-details mb-3">{title}</h3>
        <p className="text-principalText text-base opacity-80 mb-4 flex-grow">
          {description}
        </p>

        <div className="flex gap-4 mt-auto pt-2">
          <a href={linkGitHub} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <LogoGit className='w-6 h-6 text-primaryButton hover:text-hoverPB' />
          </a>
          <a href={linkInternet} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <LogoInternet className='w-6 h-6 text-primaryButton hover:text-hoverPB' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard