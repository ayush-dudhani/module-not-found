import React, { Fragment } from "react"
import Header from "../Header/Header"
import Routers from "../../routers/Routers"
import Footer from "../Footer/Footer"
import About from "../../pages/About"
const Layout = () => {
  return (
    <Fragment>
      <Header />
      <Routers />
      <Footer />
    </Fragment>
  )
}

export default Layout
