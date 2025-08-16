import React from "react"

const Footer = () => {
    return (
        <footer className="w-full bg-bgFooter text-gray-300 pt-6 pb-10 mt-10 border-t border-gray-700 shadow-sm flex justify-center">
            <div className="px-4">
                <p className="text-sm text-center">
                    © {new Date().getFullYear()} Misha — Todos os direitos reservados.
                </p>
            </div>
        </footer>
    )
}

export default Footer