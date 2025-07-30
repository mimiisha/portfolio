import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import Layout from "./layout.jsx"
import AboutMe from "./About.jsx"
import Home from "./home.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/sobre" element={<Layout><AboutMe /></Layout>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
