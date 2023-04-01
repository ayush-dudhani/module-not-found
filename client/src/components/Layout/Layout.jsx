import React, { Fragment } from "react"
import Header from "../Header/Header"
import Routers from "../../routers/Routers"
import Footer from "../Footer/Footer"
import About from "../../pages/About"
const Layout = () => {
  return (
    <>
      <Header />
      <Routers />
      <About/>

      <Footer />
    </>
  )
}

export default Layout
