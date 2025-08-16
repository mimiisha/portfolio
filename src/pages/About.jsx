import React, { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { motion } from "framer-motion"
import { DownloadSimpleIcon } from "@phosphor-icons/react"
import { LogoHtml, LogoCss, LogoJs, LogoTs, LogoReact, LogoFigma, LogoGit, LogoNode } from "../svgs/Images"
import homeImageIcone from "../imgs/homeImageIcone.jpeg"
import CoursesCard from "../components/CoursesCard"

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

  const cards = [
    {
      image: "https://media.licdn.com/dms/image/v2/D4D2DAQFFB55qD4ms5w/profile-treasury-image-shrink_800_800/B4DZT7iLZLHIAY-/0/1739386829120?e=1755723600&v=beta&t=OncTCD7WvrTkjeKVrk5XGQkJ9SBMPbj2WTM_nqZtCSk",
      date: "22 jun. 2024",
      category: "Inteligência Artificial",
      title: "Bootcamp de Inteligência Artificial Generativa",
      linkCertificado: "https://media.licdn.com/dms/image/v2/D4D2DAQFFB55qD4ms5w/profile-treasury-image-shrink_800_800/B4DZT7iLZLHIAY-/0/1739386829120?e=1755723600&v=beta&t=OncTCD7WvrTkjeKVrk5XGQkJ9SBMPbj2WTM_nqZtCSk",
    },
    {
      image: "/cursos/certificadoReactTypescript.png",
      date: "3 fev. 2025",
      category: "Programação",
      title: "React: escrevendo com Typescript",
      linkCertificado: "https://cursos.alura.com.br/certificate/895cb99d-20ff-4792-a5a0-ddf384fbf949"
    },
    {
      image: "/cursos/certificadoReact.png",
      date: "7 ago. 2024",
      category: "Programação",
      title: "React: desenvolvendo com JavaScript",
      linkCertificado: "https://cursos.alura.com.br/certificate/096ee8e6-1394-4f72-95ff-fbe38f33346e"
    },
    {
      image: "/cursos/certificadoReactRouter.png",
      date: "10 fev. 2025",
      category: "Programação",
      title: "React: conhecendo a biblioteca React Router",
      linkCertificado: "https://cursos.alura.com.br/certificate/f1f068d9-1c0a-4306-8ba6-50bc3c5cac86"
    },
    {
      image: "/cursos/certificadoReactAPIS.png",
      date: "10 fev. 2025",
      category: "Programação",
      title: "React com APIS",
      linkCertificado: "https://cursos.alura.com.br/certificate/250041ca-32c8-48f6-8b2e-82913c82a1e7"
    },
    {
      image: "/cursos/certificadoNextjsFullstack.png",
      date: "16 set. 2024",
      category: "Programação",
      title: "Next.js Full stack",
      linkCertificado: "https://cursos.alura.com.br/certificate/d14af0c2-3260-4e1e-928d-d0b0fe86b8f2"
    },
    {
      image: "/cursos/certificadoUiparaDevs.png",
      date: "20 ago. 2024",
      category: "UI Design",
      title: "UI para Devs",
      linkCertificado: "https://cursos.alura.com.br/certificate/fbfbeb04-e06f-4787-bfce-b844616df430"
    },
    {
      image: "/cursos/certificadoUxDesign.png",
      date: "23 ago. 2024",
      category: "UX Design",
      title: "UX Design",
      linkCertificado: "https://cursos.alura.com.br/certificate/7e9df367-7a36-4690-b0f6-bafcd7ae12cf"
    },
    {
      image: "/cursos/certificadoLogica.png",
      date: "2 ago. 2024",
      category: "Programação",
      title: "Lógica de Programação",
      linkCertificado: "https://cursos.alura.com.br/certificate/ff221916-d4ea-4e33-b159-0a80e771e7d8"
    },
  ]

  return (
    <div className="bg-backgound text-principalText min-h-screen">
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

        <div className="flex justify-center items-start md:items-center py-6 md:py-10 min-h-[300px]">
          <motion.img
            src={homeImageIcone}
            alt="Misha"
            className="w-full max-w-[400px] lg:w-[400px] mx-auto rounded-full border-2 border-details"
            initial={{ opacity: 0, y: isMobile ? 40 : 0, x: isMobile ? 0 : 40 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>
      </div>
      <div>
        <div className="bg-bgSecondary w-full py-12 flex flex-col text-details justify-center items-center gap-6 relative overflow-hidden mb-10">
          <div className="absolute top-0 inset-x-0 h-12 w-full bg-gradient-to-b from-backgound/70 to-transparent backdrop-blur-sm pointer-events-none"></div>
          <div className="w-full px-6 md:px-16 flex flex-col gap-8 py-8">
            <h1 className="md:text-4xl font-bold text-details flex justify-center md:justify-start sm:text-3xl text-[28px]">
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
          <div className="absolute bottom-0 inset-x-0 h-12 w-full bg-gradient-to-t from-backgound/70 to-transparent backdrop-blur-sm pointer-events-none"></div>
        </div>
      </div>
      <div className="px-10 md:px-16 flex flex-col gap-6 mb-5">
        <h1 className="md:text-4xl font-bold text-primaryButton flex justify-center md:justify-start sm:text-3xl text-[28px]">
          Cursos em destaques
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <CoursesCard key={index} {...card} delay={index * 200} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutMe