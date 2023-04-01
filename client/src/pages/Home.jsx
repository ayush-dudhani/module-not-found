import React from "react"
import Helmet from "../components/Helmet/Helmet"
import HeroSlider from "../components/UI/HeroSlilder"
import AboutSection from "../components/UI/AboutSection"
import { Container, Row, Col } from "reactstrap"
import ServicesList from "../components/UI/ServicesList"
// import data from "../assets/data/Data.js"
import BecomeDriver from "../components/UI/BecomeDriver"
import Items from "./Items"
import allData from "../hooks/fetchData"
import Testimonial from "../components/UI/Testimonial"
const Home = () => {
  const { data } = allData()
  return (
    <Helmet title="Home">
      {" "}
      <HeroSlider />
      <AboutSection />
      <section style={{width: "100vw"}}>
        <Container style={{width: "100%"}}>
          <Row style={{backgroundColor: "#000d6b", padding: "1em 0"}}>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title" style={{color:"white"}}>Popular Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>

            {data.slice(0, 6).map((item) => (
              <Items item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
      <BecomeDriver />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Our clients says</h6>
              {/* <h2 className="section__title">Testimonials</h2> */}
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home
