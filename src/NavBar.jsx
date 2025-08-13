import React, { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { ListIcon, XIcon } from "@phosphor-icons/react"
import logo from "./imgs/logomisha.png"

const NavBar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

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

  const handleLogoClick = () => {
    navigate("/")
    setTimeout(() => {
      window.location.reload()
    }, 100)
  }

  const openWhatsApp = () => {
    const number = "5511950776623"
    const message = "Olá, Misha! Gostaria de conversar sobre..."
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`

    window.open(url, "_blank")
  }

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Sobre", path: "/sobre" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Contato", path: "/contato" },
  ]

  return (
    <header className={`bg-backgound sticky top-0 z-50 transition-shadow duration-300 overflow-visible ${hasScrolled ? 'shadow-nav-scroll' : ''}`}>
      <nav className="flex justify-between items-center h-[80px] px-6 md:px-12">
        <div className="hover:cursor-pointer" onClick={handleLogoClick}>
          <img src={logo} alt="Logo" className="w-auto h-10 object-contain" />
        </div>
        <ul className="hidden md:flex gap-8 text-white">
          {navItems.map((item) => (
            <li
              key={item.path}
              className={`hover:underline underline-offset-[5px] transition-all duration-300 ${location.pathname === item.path ? "opacity-100 underline" : "opacity-50"
                }`}
            >
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <button onClick={openWhatsApp} className="hidden md:block h-auto px-4 py-2 rounded-full bg-primaryButton hover:bg-hoverPB transition-all duration-300 text-white font-semibold">
          Vamos conversar
        </button>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <XIcon size={28} /> : <ListIcon size={28} />}
        </button>
      </nav>

      <div
        className={`md:hidden flex flex-col items-center gap-6 bg-backgound text-white text-lg transform transition-all duration-300 ease-in-out origin-top absolute top-[80px] left-0 w-full z-40 ${isMobileMenuOpen
          ? "max-h-96 opacity-100 scale-y-100 py-6 shadow-nav-scroll"
          : "max-h-0 opacity-0 scale-y-0 overflow-hidden"
          }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`hover:underline underline-offset-[5px] transition-all duration-300 ${location.pathname === item.path
              ? "opacity-100 underline"
              : "opacity-50"
              }`}
          >
            {item.label}
          </Link>
        ))}
        <button onClick={openWhatsApp} className="h-auto px-6 py-2 rounded-full bg-primaryButton hover:bg-hoverPB transition-all duration-300 text-white font-semibold">
          Vamos conversar
        </button>
      </div>
    </header>
  )
}

export default NavBar