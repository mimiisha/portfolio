import React, {useEffect} from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { DownloadSimpleIcon } from "@phosphor-icons/react"
import { LogoHtml, LogoCss, LogoJs, LogoTs, LogoReact, LogoFigma } from "./svgs/Images"



const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 800 })
  }, [])

  const KnowledgeItem = ({ name, Icon, delay }) => (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="flex flex-col items-center text-base md:text-xl text-cyan-500"
    >
      {name}
      <Icon className="transition-all duration-300 text-cyan-500 hover:text-cyan-700 w-16 h-16 md:w-24 md:h-24" />
    </div>
  )

  return (
    <div>
      <div className="grid grid-cols-3">
        <div className="flex justify-center items-center col-span-3">
          <div className="my-10 mx-16 gap-2 col-span-2">
            <p className="text-lg md:text-2xl">Sou estudante de Design de Mídias Digitais, pela FATEC, e atuo com desenvolvimento front-end, unindo tecnologia e criatividade para criar soluções funcionais, acessíveis e centradas no usuário. Tenho experiência prática com React.js, JavaScript, TypeScript, Styled Components, integração com APIs e criação de componentes reutilizáveis.<br /><br />
              Também já atuei em projetos completos — do protótipo no Figma à implementação — sempre buscando unir UX/UI, organização e empatia pelo usuário.
              <br /><br />
              Gosto de aprender, colaborar com pessoas e transformar ideias em experiências digitais de verdade. Se quiser conversar ou criar algo juntos, estou por aqui! :)</p>
            <a
              href="/cartaApresentaçãoMisha.pdf"
              download
              className="flex justify-center items-center gap-4 mt-8 h-auto w-64 text-white rounded-full px-4 py-2 bg-[#AE11A9] hover:bg-[#7B0578] transition-all duration-300 font-medium">
              Carta de Apresentação <DownloadSimpleIcon className="text-white w-5 h-5" weight="bold" />
            </a>
          </div>
        </div>
      </div>
      <div>
        {/* sua parte do texto */}
        <div className="bg-black">
          <div className="my-10 mx-16 flex flex-col gap-8 py-8">
            <h1 className="md:text-4xl font-bold text-cyan-400 flex justify-center md:justify-start text-3xl">
              Conhecimentos
            </h1>
            <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-8 justify-items-center items-center">
              <KnowledgeItem name="HTML" Icon={LogoHtml} delay="0" />
              <KnowledgeItem name="CSS" Icon={LogoCss} delay="100" />
              <KnowledgeItem name="JavaScript" Icon={LogoJs} delay="200" />
              <KnowledgeItem name="TypeScript" Icon={LogoTs} delay="300" />
              <KnowledgeItem name="React" Icon={LogoReact} delay="400" />
              <KnowledgeItem name="Figma" Icon={LogoFigma} delay="500" />
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe