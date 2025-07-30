import React from "react"
import { DownloadSimpleIcon } from "@phosphor-icons/react"

const AboutMe = () => {
  const handleLogoClick = () => {
    window.location.reload()
  }

  return (
    <div className="grid grid-cols-3 h-[calc(100vh-80px)]">
      <div className="my-10 mx-16  gap-2 col-span-2">
        <p className="text-2xl">Sou estudante de Design de Mídias Digitais, pela FATEC, e atuo com desenvolvimento front-end, unindo tecnologia e criatividade para criar soluções funcionais, acessíveis e centradas no usuário. Tenho experiência prática com React.js, JavaScript, TypeScript, Styled Components, integração com APIs e criação de componentes reutilizáveis.<br /><br />
          Também já atuei em projetos completos — do protótipo no Figma à implementação — sempre buscando unir UX/UI, organização e empatia pelo usuário.
          <br /><br />
          Gosto de aprender, colaborar com pessoas e transformar ideias em experiências digitais de verdade. Se quiser conversar ou criar algo juntos, estou por aqui! :)</p>
        <button className="flex items-center gap-4 mt-8 h-auto w-auto text-white rounded-3xl px-4 py-2 bg-[#AE11A9] hover:bg-[#7B0578] transition-all duration-300 font-medium">
          Carta de Apresentação <DownloadSimpleIcon className="text-white w-5 h-5" weight="bold"/>
        </button>
      </div>
      <div className="col-span-1"> aaaaaa</div>
    </div>
  )
}

export default AboutMe