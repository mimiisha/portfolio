import React from "react"
import homeImage from "../imgs/homeImage.png"
import { DownloadSimpleIcon, CodeIcon } from "@phosphor-icons/react"

const Home = () => {
    return (
        <div className="bg-backgound grid grid-cols-1 md:grid-cols-3 h-auto md:h-[calc(100vh-80px)]">
            <div className="my-10 mx-8 md:mx-16 flex flex-col gap-4 md:col-span-2 text-principalText">
                <h1 className="font-medium text-3xl sm:text-4xl">Olá, eu sou a Misha!</h1>
                <h2 className="font-bold text-5xl sm:text-6xl">WEB <span className="text-details">DEVELOPER</span></h2>
                <p className="text-lg sm:text-xl">Aqui você encontra meus projetos acadêmicos e pessoais, desenvolvidos para implementar e consolidar meus conhecimentos técnicos.<br />Sinta-se à vontade para explorar, conhecer meu processo criativo e ver como tecnologia e criatividade se unem no meu trabalho.
                </p>

                <div className="flex flex-row gap-4">
                    <a
                        href="https://github.com/mimiisha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center items-center mt-8 h-auto w-64 text-white rounded-full px-4 py-2 bg-secondaryButton hover:bg-hoverSB transition-all duration-300 font-semibold text-xs md:text-base"
                    >
                        Projetos <CodeIcon className="text-white w-4 h-4 md:w-5 md:h-5 ml-2" weight="bold" />
                    </a>
                    <a
                        href="/curriculoMisha.pdf"
                        download
                        className="flex justify-center items-center gap-4 mt-8 h-auto w-64 text-white rounded-full px-4 py-2 bg-primaryButton hover:bg-hoverPB transition-all duration-300 font-semibold text-xs md:text-base"
                    >
                        Meu currículo <DownloadSimpleIcon className="text-white w-4 h-4 md:w-5 md:h-5" weight="bold" />
                    </a>
                </div>
                <img
                    src={homeImage}
                    alt="Misha"
                    className="block md:hidden my-10 w-[400px] mx-auto animate-bounce-slow"
                />
            </div>
            <div className="hidden md:block col-span-1 mr-8">
                <img
                    src={homeImage}
                    alt="Minha Foto"
                    className="w-full h-full object-contain animate-bounce-slow"
                />
            </div>
        </div>
    )
}

export default Home
