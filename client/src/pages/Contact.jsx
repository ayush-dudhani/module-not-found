import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap"
import Helmet from "../components/Helmet/Helmet"
import CommonSection from "../components/UI/CommonSection"
import swal from "sweetalert"
import "../styles/contact.css"
import emailjs from "emailjs-com"
import { useNavigate } from "react-router"
const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
]
const SERVICE_ID = "service_v8ubk1n"
const TEMPLATE_ID = "template_594qxpo"
const USER_ID = "yrglX7tEFoBjZvO-5"

const Contact = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessgae] = useState()
  const Navigate = useNavigate()

  const HandleSubmit = (e) => {
    e.preventDefault()
    let templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    }
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID).then(
      (result) => {
        console.log(result.text)

        swal({
          title: "Message Sent!",
          text: "We'll reach you out soon!",
          icon: "success",
          button: "Close!",
        })
        setEmail("")
        setMessgae("")
        setName("")
        Navigate("/home")
      },
      (error) => {
        console.log(error.text)
        swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        })
      }
    )
  }

  //  const HandleSubmit=(event)=>{
  //    if(name && email && message){
  //            swal({
  //                  title:"Message Sent!",
  //                  text: "We'll reach you out soon!",
  //                  icon: "success",
  //                    button: "Close!",
  //                     });
  //             setEmail('');
  //             setMessgae('');
  //             setName('');
  //             Navigate('/home')
  //    }
  //    else{
  //               swal({
  //                    title: "Oops!",
  //                    text: "Incorrect Message..Try again !",
  //                    icon: "error",
  //                    button: "Try again!",
  //                    timer:'1500'
  //                     });
  //    }

  //  }

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleMessage = (e) => {
    setMessgae(e.target.value)
  }

  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4 text-center">Get In Touch</h6>

              <Form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "94%",
                  backgroundColor: "#f7f7f7",
                  padding: "35px 60px",
                  borderRadius: "51px",
                }}
                // onSubmit={HandleSubmit}
              >
                <FormGroup className="contact__form">
                  <Input
                    value={name}
                    onChange={handleName}
                    placeholder="Your Name"
                    type="text"
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input
                    value={email}
                    onChange={handleEmail}
                    style={{ width: "343px" }}
                    placeholder="Email"
                    type="email"
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input
                    value={message}
                    onChange={handleMessage}
                    style={{ width: "580px" }}
                    rows="5"
                    columns="2"
                    placeholder="Message"
                    className="textarea"
                    type="textarea"
                  />
                </FormGroup>

                <button
                  onClick={HandleSubmit}
                  className=" contact__btn"
                  type="submit"
                >
                  Send Message
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div
                style={{ paddingLeft: "120px", paddingTop: "26px" }}
                className="contact__info"
              >
                <h6 className="fw-bold">Contact Information</h6>
                <p className="section__description mb-0">Akurdi, Pune</p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">9021423716</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">
                    gaikwadvipul196@gmail.com
                  </p>
                </div>
                <div
                  className="d-flex flex-column justify-content-center w-auto h-70"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "start",
                    height: "70%",
                    backgroundColor: "#f7f7f7",
                    padding: "10%"
                  }}
                >
                  <p className="section__description mb-0">
                    Pimpri Chinchwad, Pune
                  </p>
                  <div className=" d-flex align-items-center gap-2 justify-content-center">
                    <h6 className="fs-6 mb-0">Phone:</h6>
                    <p className="section__description mb-0">9021423716</p>
                  </div>
                  <div className=" d-flex align-items-center gap-2">
                    <h6 className="mb-0 fs-6">Email:</h6>
                    <p className="section__description mb-0">
                      rentwithus@gmail.com
                    </p>
                  </div>
                  <h6 className="fw-bold mt-4">Follow Us</h6>
                  <div className="d-flex align-items-center gap-4 mt-3">
                    {socialLinks.map((item, index) => (
                      <Link
                        to={item.url}
                        key={index}
                        className="social__link-icon"
                      >
                        <i class={item.icon}></i>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Contact
