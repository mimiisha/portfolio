import ScrollToTop from "./ScrollToTop"
import React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"

const Layout = ({ children }) => {
    return (
        <div className="bg-backgound">
            <NavBar />
            <ScrollToTop />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout