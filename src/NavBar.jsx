import React, { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { ListIcon, XIcon } from "@phosphor-icons/react"
import logo from "./imgs/logomisha.png"

const NavBar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLogoClick = () => {
    navigate("/")
    setTimeout(() => {
      window.location.reload()
    }, 100)
  }

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Sobre", path: "/sobre" },
    { label: "Contato", path: "/contato" },
  ]

  return (
    <header className="bg-black sticky top-0 z-50">
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

        <button className="hidden md:block h-auto px-4 py-2 rounded-3xl bg-[#AE11A9] hover:bg-[#7B0578] transition-all duration-300 text-white font-medium">
          Vamos conversar
        </button>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <XIcon size={28} /> : <ListIcon size={28} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 pb-6 bg-black text-white text-lg">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`hover:underline underline-offset-[5px] transition-all duration-300 ${location.pathname === item.path ? "opacity-100 underline" : "opacity-50"
                }`}
            >
              {item.label}
            </Link>
          ))}
          <button className="h-auto px-6 py-2 rounded-3xl bg-[#AE11A9] hover:bg-[#7B0578] transition-all duration-300 text-white font-medium">
            Vamos conversar
          </button>
        </div>
      )}
    </header>
  )
}

export default NavBar
