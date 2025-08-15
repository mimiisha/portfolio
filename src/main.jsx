import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import Layout from "./components/Layout.jsx"
import AboutMe from "./pages/About.jsx"
import Home from "./pages/Home.jsx"
import Contact from "./pages/Contact.jsx"
import Portfolio from "./pages/Portfolio.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/sobre" element={<Layout><AboutMe /></Layout>} />
        <Route path="/projetos" element={<Layout><Portfolio /></Layout>} />
        <Route path="/contato" element={<Layout><Contact /></Layout>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
