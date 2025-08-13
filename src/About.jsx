import React, { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { DownloadSimpleIcon } from "@phosphor-icons/react"
import { LogoHtml, LogoCss, LogoJs, LogoTs, LogoReact, LogoFigma, LogoGit, LogoNode } from "./svgs/Images"
import homeImageIcone from "./imgs/homeImageIcone.jpeg"

const AboutMe = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 767)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    AOS.init({
      duration: 800,
      easing: 'ease-in-out-quad',
      once: true,
      offset: 120,
    })

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const KnowledgeItem = ({ name, Icon, delay }) => (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="flex flex-col items-center text-base md:text-xl text-details"
    >
      {name}
      <Icon className="transition-all duration-300 text-details hover:text-hoverDetail w-16 h-16 md:w-24 md:h-24" />
    </div>
  )

  return (
    <div className="bg-backgound text-principalText min-h-screen pb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 md:px-16">
        <div className="md:col-span-2 py-10">
          <div className="flex flex-col gap-6">
            <p className="text-lg md:text-2xl">
              Sou estudante de Design de Mídias Digitais, pela FATEC, e atuo com desenvolvimento front-end,
              unindo tecnologia e criatividade para criar soluções funcionais, acessíveis e centradas no usuário.
              Tenho experiência prática com React.js, JavaScript, TypeScript, Styled Components, integração com APIs
              e criação de componentes reutilizáveis.
              <br /><br />
              Também já atuei em projetos completos — do protótipo no Figma à implementação — sempre buscando unir
              UX/UI, organização e empatia pelo usuário.
              <br /><br />
              Gosto de aprender, colaborar com pessoas e transformar ideias em experiências digitais de verdade.
              Se quiser conversar ou criar algo juntos, estou por aqui! :)
            </p>
            <div className="flex justify-center items-center md:justify-start ">
              <a
                href="/cartaApresentaçãoMisha.pdf"
                download
                className="flex justify-center items-center gap-4 mt-4 h-auto w-72 text-white rounded-full px-4 py-2 bg-primaryButton hover:bg-hoverPB transition-all duration-300 font-semibold"
              >
                Carta de Apresentação
                <DownloadSimpleIcon className="text-white w-5 h-5" weight="bold" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-start md:items-center py-6 md:py-10">
          <img
            src={homeImageIcone}
            alt="Misha"
            className="w-full max-w-[400px] lg:w-[400px] mx-auto rounded-full border-2 border-details"
            data-aos={isMobile ? "fade-up" : "fade-left"}
            data-aos-delay="300"
            data-aos-duration="800"
          />
        </div>
      </div>
      <div>
        <div className="bg-bgSecondary w-full py-12 flex flex-col text-details justify-center items-center gap-6 relative overflow-hidden mb-10">
          <div className="absolute top-0 left-0 right-0 h-12 
                 bg-gradient-to-b from-backgound/70 to-transparent 
                 backdrop-blur-sm"></div>
          <div className="w-full px-16 flex flex-col gap-8 py-8 ">
            <h1 className="md:text-4xl font-bold text-details flex justify-center md:justify-start text-3xl">
              Conhecimentos
            </h1>
            <section className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-y-8 justify-items-center items-center w-full">
              <KnowledgeItem name="HTML" Icon={LogoHtml} delay="0" />
              <KnowledgeItem name="CSS" Icon={LogoCss} delay="100" />
              <KnowledgeItem name="JavaScript" Icon={LogoJs} delay="200" />
              <KnowledgeItem name="TypeScript" Icon={LogoTs} delay="300" />
              <KnowledgeItem name="React" Icon={LogoReact} delay="400" />
              <KnowledgeItem name="Git" Icon={LogoGit} delay="500" />
              <KnowledgeItem name="Node.js" Icon={LogoNode} delay="600" />
              <KnowledgeItem name="Figma" Icon={LogoFigma} delay="700" />
            </section>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-12 
                 bg-gradient-to-t from-backgound/70 to-transparent backdrop-blur-sm"></div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe