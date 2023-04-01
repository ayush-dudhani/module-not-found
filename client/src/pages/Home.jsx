import React from "react"
import Helmet from "../components/Helmet/Helmet"
import HeroSlider from "../components/UI/HeroSlilder"
const Home = () => {
  return (
    <Helmet title="Home">
      {" "}
      <HeroSlider />{" "}
    </Helmet>
  )
}

export default Home
