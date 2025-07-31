import React from "react"
import { WhatsappLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

const Home = () => {
    return (
        <div className="flex justify-center h-[calc(100vh-80px)]">
            <div className="my-10 mx-16 flex gap-24">
                <WhatsappLogoIcon className="w-14 h-14" />
                <LinkedinLogoIcon className="w-14 h-14" />
            </div>
        </div>
    )
}

export default Home