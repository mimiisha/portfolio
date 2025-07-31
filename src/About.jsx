import React from "react"
import { DownloadSimpleIcon } from "@phosphor-icons/react"
import { LogoHtml, LogoCss, LogoJs, LogoTs, LogoReact, LogoFigma } from "./svgs/Images"

const AboutMe = () => {
  return (
    <div>

      <div className="grid grid-cols-3">
        <div className="flex justify-center items-center col-span-3">
          <div className="my-10 mx-16 gap-2 col-span-2">
            <p className="text-2xl">Sou estudante de Design de Mídias Digitais, pela FATEC, e atuo com desenvolvimento front-end, unindo tecnologia e criatividade para criar soluções funcionais, acessíveis e centradas no usuário. Tenho experiência prática com React.js, JavaScript, TypeScript, Styled Components, integração com APIs e criação de componentes reutilizáveis.<br /><br />
              Também já atuei em projetos completos — do protótipo no Figma à implementação — sempre buscando unir UX/UI, organização e empatia pelo usuário.
              <br /><br />
              Gosto de aprender, colaborar com pessoas e transformar ideias em experiências digitais de verdade. Se quiser conversar ou criar algo juntos, estou por aqui! :)</p>
            <button className="flex items-center gap-4 mt-8 h-auto w-auto text-white rounded-3xl px-4 py-2 bg-[#AE11A9] hover:bg-[#7B0578] transition-all duration-300 font-medium">
              Carta de Apresentação <DownloadSimpleIcon className="text-white w-5 h-5" weight="bold" />
            </button>
          </div>
          {/* <div className="col-span-1"> aaaaaa</div> */}
        </div>
      </div>
      <div className="bg-black">
        <div className="my-10 mx-16 flex flex-col gap-8 py-8">
          <h1 className="text-4xl font-bold text-cyan-400">Conhecimentos</h1>
          <section className="ml-6 grid grid-cols-6 justify-around text-xl text-cyan-500">
            <div className="flex flex-col items-center">HTML
              <LogoHtml />
            </div>
            <div className="flex flex-col items-center">CSS
              <LogoCss />
            </div>
            <div className="flex flex-col items-center">JavaScript
              <LogoJs />
            </div>
            <div className="flex flex-col items-center">TypeScript
              <LogoTs />
            </div>
            <div className="flex flex-col items-center">React
              <LogoReact />
            </div>
            <div className="flex flex-col items-center">Figma
              <LogoFigma />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default AboutMe