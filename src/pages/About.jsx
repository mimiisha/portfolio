import React, { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { motion, useReducedMotion } from "framer-motion"
import { DownloadSimpleIcon } from "@phosphor-icons/react"
import { SimpleIcon } from "../svgs/Images"
import homeImageIcone from "../imgs/homeImageIcone.jpeg"
import CoursesCard from "../components/CoursesCard"
import { skillCategories } from "../data/skills"

const skillIconClass = "h-[1.125rem] w-[1.125rem] shrink-0 text-highlight"

const SkillChip = ({ name, brand, Icon }) => (
  <li className="chip">
    {brand
      ? <SimpleIcon icon={brand} className={skillIconClass} />
      : <Icon className={skillIconClass} aria-hidden="true" focusable="false" />}
    <span>{name}</span>
  </li>
)

const SkillCategory = ({ title, items }) => (
  <div data-aos="fade-up" className="grid gap-4 border-t border-line-subtle py-8 first:border-t-0 first:pt-0 last:pb-0 lg:grid-cols-12 lg:gap-8">
    <h3 className="font-display text-title-sm font-semibold text-highlight lg:col-span-4">{title}</h3>
    <ul role="list" className="flex flex-wrap gap-3 lg:col-span-8">
      {items.map((item) => (
        <SkillChip key={item.name} {...item} />
      ))}
    </ul>
  </div>
)

const AboutMe = () => {
  const [isMobile, setIsMobile] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 767)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    AOS.init({
      duration: 600,
      easing: 'ease-out-quart',
      once: true,
      offset: 80,
      disable: shouldReduceMotion === true,
    })

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [shouldReduceMotion])

  const cards = [
    {
      image: "/cursos/certificadoDistrito.png",
      date: "22 jun. 2024",
      category: "Inteligência Artificial",
      title: "Bootcamp de Inteligência Artificial Generativa",
      linkCertificado: "/cursos/certificadoDistrito.png",
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

  const skillsCount = String(skillCategories.reduce((total, category) => total + category.items.length, 0)).padStart(2, "0")
  const coursesCount = String(cards.length).padStart(2, "0")

  return (
    <>
      <section className="page-container section-y">
        <div className="flex flex-col gap-3">
          <span className="eyebrow" aria-hidden="true"></span>
          <h1 className="heading-section">Sobre mim</h1>
        </div>
        <div className="mt-10 grid items-center gap-12 md:mt-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="max-w-measure space-y-5 text-body-lg text-content-secondary md:text-lead">
              <p>
                Sou desenvolvedora Full Stack e estudante de Design de Mídias Digitais na FATEC. Minha trajetória começou no front-end, e hoje atuo no desenvolvimento de aplicações web e mobile, unindo tecnologia, design e experiência do usuário.
              </p>
              <p>
                Tenho experiência com React, JavaScript, TypeScript, APIs REST, bancos de dados e desenvolvimento de interfaces, participando de projetos desde a prototipação no Figma até a implementação e integração das soluções.
              </p>
              <p>
                Meu diferencial está justamente em transitar entre design e desenvolvimento: gosto de entender o problema, pensar na experiência de quem vai utilizar a solução e transformar ideias em produtos digitais funcionais, intuitivos e acessíveis.
              </p>
              <p>
                Gosto de aprender, colaborar e enfrentar novos desafios. Estou sempre buscando evoluir como profissional e transformar boas ideias em experiências digitais de verdade. Se quiser conversar ou criar algo juntos, estou por aqui! :)
              </p>
            </div>
            <a
              href="/Carta de Apresentação - Danielle.pdf"
              download
              className="btn btn-primary btn-lg mt-10 w-full sm:w-auto"
            >
              Carta de Apresentação<span className="sr-only"> (download em PDF)</span>
              <DownloadSimpleIcon className="h-5 w-5 shrink-0" weight="bold" aria-hidden="true" focusable="false" />
            </a>
          </div>

          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <motion.img
              src={homeImageIcone}
              alt="Foto da Misha"
              className="aspect-square w-full max-w-[16rem] rounded-full border-2 border-highlight object-cover shadow-glow-highlight md:max-w-[20rem] lg:max-w-[24rem]"
              initial={shouldReduceMotion ? false : { opacity: 0, y: isMobile ? 24 : 0, x: isMobile ? 0 : 24 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
            />
          </div>
        </div>
      </section>

      <section className="bg-band section-y">
        <div className="page-container">
          <div className="flex flex-col gap-3">
            <span className="eyebrow" aria-hidden="true">{skillsCount}</span>
            <h2 className="heading-section">Conhecimentos</h2>
          </div>
          <div className="mt-10 md:mt-14">
            {skillCategories.map((category) => (
              <SkillCategory
                key={category.title}
                title={category.title}
                items={category.items}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="page-container section-y">
        <div className="flex flex-col gap-3">
          <span className="eyebrow" aria-hidden="true">{coursesCount}</span>
          <h2 className="heading-section">Cursos em destaques</h2>
        </div>
        <ul role="list" className="mt-10 grid gap-6 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
          {cards.map((card, index) => (
            <CoursesCard key={index} {...card} delay={(index % 3) * 80} />
          ))}
        </ul>
      </section>
    </>
  )
}

export default AboutMe