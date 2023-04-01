import React from "react"
import Helmet from "../components/Helmet/Helmet"
import HeroSlider from "../components/UI/HeroSlilder"
import AboutSection from "../components/UI/AboutSection"
import { Container, Row, Col } from "reactstrap"
import ServicesList from "../components/UI/ServicesList"
const Home = () => {
  return (
    <Helmet title="Home">
      {" "}
      <HeroSlider /> <AboutSection />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home
