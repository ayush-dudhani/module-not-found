import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Register from "../pages/Register"
import Login from "../pages/Login"
import EquipmentListing from "../pages/EquipmentListing"
import getData from "../hooks/fetchData"
import EquipmentsDetails from "../pages/EquipmentDetails"
import OnRent from "../pages/OnRent"
import Inputs from "../components/Layout/Input"
import Checkout from "../pages/Checkout"
import inputs from "../components/Layout/BecomeDriverInput"
import BecomeDriver from "../pages/BecomeDriver"
import BlogDetails from "../pages/BlogDetails"
const Routers = () => {
  const { data } = getData()
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/onrent" element={<OnRent inputs={Inputs} />} /> */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/onrent" element={<OnRent inputs={Inputs} />} />
      <Route path="/become-driver" element={<BecomeDriver inputs={inputs} />} />
      <Route path="/equipments" element={<EquipmentListing />} />

      <Route
        path="/equipments/:idd"
        element={<EquipmentsDetails data={data} />}
      />
      <Route path="/checkout/:idd" element={<Checkout data={data} />} />
      <Route path="/blogs/:idd" element={<BlogDetails />} />
    </Routes>
  )
}

export default Routers
