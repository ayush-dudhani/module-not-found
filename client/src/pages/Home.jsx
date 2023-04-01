import React from "react"
import Helmet from "../components/Helmet/Helmet"
import HeroSlider from "../components/UI/HeroSlilder"
import AboutSection from "../components/UI/AboutSection"
const Home = () => {
  return (
    <Helmet title="Home">
      {" "}
      <HeroSlider /> <AboutSection />
    </Helmet>
  )
}

export default Home
