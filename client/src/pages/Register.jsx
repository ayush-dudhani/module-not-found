import React, { useState } from "react"
import InputForm from "./formInput"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../Config/Firebase"
import { useNavigate } from "react-router"
import styled from "styled-components"
import swal from "sweetalert"
const Container = styled.div`
  padding: 0%;
  margin: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.7), rgba(80, 45, 45, 0.3)),
    url("https://img.krishijagran.com/media/54152/1601348576farmer.png");
  /* url("https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"); */
  background-size: cover;
  background-position: center;
`

const Wrapper = styled.div`
  height: 95%;
  background-color: white;
  padding: 0px 60px;
  border-radius: 10px;
`

const Title = styled.h1`
  color: rgb(77, 1, 77);
  text-align: center;
`

const Button = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px;
  border: none;
  background-color: rebeccapurple;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 30px;
`

const inputs = [
  {
    id: 1,
    name: "Name",
    errorMessage:
      "Username is invalid it should be in between 3-16 character and should'nt include special character ",
    type: "text",
    placeholder: "Username",
    required: true,

    label: "Name",
  },

  {
    id: 2,
    name: "email",
    type: "email",
    errorMessage: "It should be valid email Address",
    placeholder: "email",
    required: true,
    label: "Email",
  },
  {
    id: 3,
    name: "password",
    type: "text",
    errorMessage:
      "Password should 8-16 character long and include atleast 1 number,1 special character",
    placeholder: "Password",
    required: true,
    pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@[-`{-~]).{6,64}$",
    label: "Password",
  },
]

const App = () => {
  const [error, setError] = useState(false)

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  })
  const Navigate = useNavigate()

  const handleChange = (e) => {
    e.preventDefault()
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  console.log(values)
  const HandleSubmit = (e) => {
    e.preventDefault()

    const email = values.email
    const password = values.password
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user

        swal({
          title: "Sucess !!",
          text: "User Registered Sucessfullyy!",
          icon: "success",
          button: "Close!",
        })

        Navigate("/login")

        console.log(user)
      })
      .catch((error) => {
        setError(error)
        swal({
          title: "Oops!",
          text: "Something went wrong!",
          icon: "error",
          button: "Try again!",
        })
      })
  }
  return (
    <Container>
      <div style={{display:"flex", alignItems:"center", justifyContent:"center", backgroundColor:"rgba(255, 255, 255, 0.5)", backdropFilter: "blur(10px)", padding: "2em", borderRadius: "10px"}}>
      <div>
        <h1 className="d-flex justify-content-center">Register</h1>

        {inputs.map((input) => (
          <InputForm
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleChange}
          />
        ))}
        
        <Button onClick={HandleSubmit} style={{backgroundColor: "#000d6b"}}> Submit</Button>
        {error && <span>Wrong Email or Password !!</span>}
        </div>
      </div>
    </Container>
  )
}
export default App
