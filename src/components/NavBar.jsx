import React, { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { ListIcon, XIcon } from "@phosphor-icons/react"
import logo from "../imgs/logomisha.png"

const NavBar = () => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const headerRef = useRef(null)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasScrolled(true)
      } else {
        setHasScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMobileMenuOpen) return

    const handleKeyDown = (event) => {
      if (event.key !== "Escape") return

      const focusWasInHeader = headerRef.current?.contains(document.activeElement)
      setIsMobileMenuOpen(false)
      if (focusWasInHeader) {
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isMobileMenuOpen])

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false)
    if (location.pathname === "/") {
      window.scrollTo(0, 0)
    }
  }

  const openWhatsApp = () => {
    const number = "5511950776623"
    const message = "Olá, Misha! Gostaria de conversar sobre..."
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`

    window.open(url, "_blank", "noopener,noreferrer")
  }

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Sobre", path: "/sobre" },
    { label: "Projetos", path: "/projetos" },
    { label: "Contato", path: "/contato" },
  ]

  const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b bg-canvas/95 backdrop-blur-md backdrop-saturate-150 transition-colors duration-300 ease-out-quart supports-[backdrop-filter]:bg-canvas/80 [@media(max-height:30rem)]:relative ${hasScrolled ? "border-line-subtle" : "border-transparent"}`}
    >
      <nav aria-label="Principal" className="page-container flex h-nav items-center justify-between gap-6">
        <Link to="/" onClick={handleLogoClick} className={`-mx-1 rounded-control p-1 ${focusRing}`}>
          <img src={logo} alt="Misha — página inicial" className="h-9 w-auto object-contain" />
        </Link>
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  aria-current={isActive ? "page" : undefined}
                  className={`inline-flex h-10 items-center rounded-full px-4 text-body font-medium transition-colors duration-200 ease-out-quart active:bg-content/10 ${focusRing} ${isActive
                    ? "text-content underline decoration-highlight decoration-2 underline-offset-8"
                    : "text-content-secondary hover:bg-content/5 hover:text-content"
                    }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <button type="button" onClick={openWhatsApp} className="btn btn-primary hidden min-h-10 px-4 lg:inline-flex">
          Vamos conversar<span className="sr-only"> (abre o WhatsApp em nova aba)</span>
        </button>

        <button
          ref={menuButtonRef}
          type="button"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-content transition-colors duration-200 ease-out-quart hover:bg-content/5 active:bg-content/10 lg:hidden ${focusRing}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="menu-mobile"
        >
          {isMobileMenuOpen
            ? <XIcon size={24} aria-hidden="true" focusable="false" />
            : <ListIcon size={24} aria-hidden="true" focusable="false" />}
        </button>

        <div
          id="menu-mobile"
          className={`absolute inset-x-0 top-full border-b border-line-subtle bg-canvas shadow-menu transition-[opacity,transform,visibility] duration-200 ease-out-quart lg:hidden ${isMobileMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-2 opacity-0"
            }`}
        >
          <div className="page-container flex flex-col gap-1 py-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex h-12 items-center rounded-control pr-4 text-body font-medium transition-colors duration-200 ease-out-quart ${focusRing} ${isActive
                    ? "border-l-[3px] border-highlight bg-surface-raised pl-4 text-content"
                    : "pl-[calc(1rem+3px)] text-content-secondary hover:bg-content/5 hover:text-content"
                    }`}
                >
                  {item.label}
                </Link>
              )
            })}
            <button type="button" onClick={openWhatsApp} className="btn btn-primary btn-lg mt-3 w-full">
              Vamos conversar<span className="sr-only"> (abre o WhatsApp em nova aba)</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
