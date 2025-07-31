import React from "react"
import homeImage from "./imgs/homeImage.png"
import homeImageIcone from "./imgs/homeImageIcone.jpeg"
import { DownloadSimpleIcon, CodeIcon } from "@phosphor-icons/react"

const Home = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 h-auto md:h-[calc(100vh-80px)]">
            <div className="my-10 mx-8 md:mx-16 flex flex-col gap-4 md:col-span-2">
                <h1 className="font-medium text-4xl">Olá, eu sou a Misha!</h1>
                <h2 className="font-bold text-6xl">WEB <span className="text-[#AE11A9]">DEVELOPER</span></h2>
                <p className="text-xl">apresentação</p>

                <div className="flex flex-row gap-4">
                    <a
                        href="https://github.com/mimiisha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center items-center mt-8 h-auto w-64 text-white rounded-3xl px-4 py-2 bg-[#A399A2] hover:bg-[#8C848B] transition-all duration-300 font-medium"
                    >
                        Projetos <CodeIcon className="text-white w-5 h-5 ml-2" weight="bold" />
                    </a>
                    <a
                        href="/curriculoMisha.pdf"
                        download
                        className="flex justify-center items-center gap-4 mt-8 h-auto w-64 text-white rounded-3xl px-4 py-2 bg-[#AE11A9] hover:bg-[#7B0578] transition-all duration-300 font-medium"
                    >
                        Meu currículo <DownloadSimpleIcon className="text-white w-5 h-5" weight="bold" />
                    </a>
                </div>

                <img
                    src={homeImageIcone}
                    alt="Misha"
                    className="block md:hidden mt-10 w-full mx-auto rounded-full"
                />
            </div>

            <div className="hidden md:block col-span-1">
                <img src={homeImage} alt="Minha Foto" className="w-full h-full object-cover" />
            </div>
        </div>
    )
}

export default Home
