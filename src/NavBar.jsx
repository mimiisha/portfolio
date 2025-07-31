import React from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import logo from "./imgs/logomisha.png"

const NavBar = () => {
  const location = useLocation()
  const navigate = useNavigate()

  // const handleLogoClick = () => {
  //   window.location.reload()
  // }
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
      <nav className="grid grid-cols-5 justify-start items-center h-[80px] mx-7">
        <div className="col-span-2 hover:cursor-pointer" onClick={handleLogoClick}>
          <img src={logo} alt="Minha Foto" className="w-auto h-auto object-cover" />
        </div>
        <ul className="flex gap-8 mr-12 col-span-2">
          {navItems.map((item) => (
            <li
              key={item.path}
              className={`text-white hover:underline underline-offset-[5px] transition-all duration-300 ${location.pathname === item.path ? "opacity-100 underline underline-offset-[5px]" : "opacity-50"
                }`}
            >
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <button className="col-span-1 justify-self-end h-auto w-auto rounded-3xl px-4 py-2 bg-[#AE11A9] hover:bg-[#7B0578] transition-all duration-300 text-white font-medium">
          Vamos conversar
        </button>
      </nav>
    </header>
  )
}

export default NavBar
