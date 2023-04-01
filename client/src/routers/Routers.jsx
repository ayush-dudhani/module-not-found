import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Register from "../pages/Register"
import Login from "../pages/Login"
import EquipmentListing from "../pages/EquipmentListing"
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/equipments" element={<EquipmentListing />} />
    </Routes>
  )
}

export default Routers
