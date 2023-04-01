import React from "react"
import { Container, Row, Col } from "reactstrap"
import "../../styles/about-section.css"
import aboutImg from "../../assets/all-images/slider-img/Slider2.jpeg"

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section w-100"
      style={
        aboutClass === "aboutPage" ? { marginTop: "0px" } : { marginTop: "0px" }
      }
    >
      <Container style={{width:"100%"}}>
        <Row style={{width:"100%", alignItems: "center"}}>
          <Col style={{ padding: "1em"}} lg="6" md="6" >
            <div className="about__section-content w-100">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title ">
                Welcome to Farming Equipment rent service
              </h2>
              <p className="section__description">
                Our purpose is to democratize technology for the farmer having
                small as well as land in large Scale. Our agendy or mission is
                to make India a nation of Champion Farmers . Famers power India
                and we empower farmers. Together we advance agriculture.We
                provide Farm Equipments Rentals to advance the productivity of
                your Farm. Farmers Can also Earn by giving their instruments,
                machinary on rent throught us. Through this a living body of
                partnerships of expertise and excellence coming together to
                serve every need of the farmer, using every opportunity to
                advance agriculture.
              </p>

              <div className="about__section-item ">
                
                <p className="section__description">
                  <i class="ri-checkbox-circle-line"></i> Democratize technology
                  for small landholders
                </p>

                <p className="section__description">
                  <i class="ri-checkbox-circle-line"></i> Make India a nation of
                  Champion Farmers
                </p>
              
                <p className="section__description">
                  <i class="ri-checkbox-circle-line"></i>Famers power India and
                  we empower farmers.
                </p>

                <p className="section__description">
                  <i class="ri-checkbox-circle-line"></i> Together we advance
                  agriculture.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutSection
