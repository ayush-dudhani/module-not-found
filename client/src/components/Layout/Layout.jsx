import React from "react"
import Header from "../Header/Header"
import Routers from "../../routers/Routers"
import Footer from "../Footer/Footer"
import About from "../../pages/About"
const Layout = () => {
  return (
    <Fragment>
      
      <Header />

      <Routers />
      {/* <About/> */}

      {/* <Footer /> */}
    </Fragment>
  )
}

export default Layout
