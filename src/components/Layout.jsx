import ScrollToTop from "./ScrollToTop"
import React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"

const Layout = ({ children }) => {
    return (
        <div className="flex min-h-screen flex-col bg-canvas text-content">
            <NavBar />
            <ScrollToTop />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    )
}

export default Layout
