import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import Layout from "./layout.jsx"
import AboutMe from "./About.jsx"
import Home from "./Home.jsx"
import Contact from "./Contact.jsx"
import Portfolio from "./Portfolio.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/sobre" element={<Layout><AboutMe /></Layout>} />
        <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
        <Route path="/contato" element={<Layout><Contact /></Layout>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
