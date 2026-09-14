import React from "react"

const Footer = () => {
    return (
        <footer className="border-t border-line-subtle">
            <div className="page-container py-8">
                <p className="text-center text-caption text-content-secondary md:text-left">
                    © {new Date().getFullYear()} Misha — Todos os direitos reservados.
                </p>
            </div>
        </footer>
    )
}

export default Footer
