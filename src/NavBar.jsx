import React from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

const NavBar = () => {
  const location = useLocation()
  const navigate = useNavigate()

  // const handleLogoClick = () => {
  //   window.location.reload()
  // }
  const handleLogoClick = () => {
    navigate("/home")
    setTimeout(() => {
      window.location.reload()
    }, 100)
  }

  const navItems = [
    { label: "Home", path: "/home" },
    { label: "Sobre", path: "/sobre" },
  ]

  return (
    <header className="bg-[#F8F8F8] sticky top-0 z-50">
      <nav className="grid grid-cols-5 justify-start items-center h-[80px] mx-7">
        <div className="col-span-2 hover:cursor-pointer" onClick={handleLogoClick}>
          logo
        </div>
        <ul className="flex gap-8 mr-12 col-span-2">
          {navItems.map((item) => (
            <li
              key={item.path}
              className={`hover:underline underline-offset-[5px] transition-opacity duration-300 ${location.pathname === item.path ? "opacity-100 underline underline-offset-[5px]" : "opacity-50"
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
