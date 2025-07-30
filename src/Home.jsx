import React from "react"
import homeImage from "./imgs/homeImage.png"
import { DownloadSimpleIcon, CodeIcon } from "@phosphor-icons/react"

const Home = () => {
    return (
        <div className="grid grid-cols-3 h-[calc(100vh-80px)]">
            <div className="my-10 mx-16 flex flex-col gap-4 col-span-2">
                <h1 className="font-medium text-4xl">Olá, eu sou a Misha!</h1>
                <h2 className="font-bold text-6xl">WEB <span className="text-[#AE11A9]">DEVELOPER</span></h2>
                <p className="text-xl">apresentação</p>
                <div className="flex gap-4">
                    <button className="flex justify-center mt-8 h-auto w-64 text-white rounded-3xl px-4 py-2 bg-[#A399A2] hover:bg-[#8C848B] transition-all duration-300 font-medium">
                        <a href="https://github.com/mimiisha" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                            Projetos <CodeIcon className="text-white w-5 h-5" weight="bold" />
                        </a>
                    </button>
                    {/* <button className="flex justify-center items-center gap-4 mt-8 h-auto w-64 text-white rounded-3xl px-4 py-2 bg-[#AE11A9] hover:bg-[#7B0578] transition-all duration-300 font-medium">
                        <a href="https://1drv.ms/b/c/c2fafabc8a7a4034/EVxnNJWx-QpPhzLhT-C6J08Bc9zHJJLtbCkshBEa1yayiw?e=HbjsKw" download></a>
                        Meu currículo <DownloadSimpleIcon className="text-white w-5 h-5" weight="bold" />
                    </button> */}
                    <a
  href="https://1drv.ms/b/c/c2fafabc8a7a4034/EVxnNJWx-QpPhzLhT-C6J08Bc9zHJJLtbCkshBEa1yayiw?e=HbjsKw"
  target="_blank"
  rel="noopener noreferrer"
  className="flex justify-center items-center gap-4 mt-8 h-auto w-64 text-white rounded-3xl px-4 py-2 bg-[#AE11A9] hover:bg-[#7B0578] transition-all duration-300 font-medium"
>
  Meu currículo <DownloadSimpleIcon className="text-white w-5 h-5" weight="bold" />
</a>

                </div>
            </div>
            <div className="col-span-1">
                <img src={homeImage} alt="Minha Foto" className="flex justify-self-end w-full h-full object-cover" />
            </div>
        </div>
    )
}

export default Home