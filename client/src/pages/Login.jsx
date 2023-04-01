import React,{useState,useContext} from "react";
import styled from "styled-components";
import InputForm from './formInput'

const Container = styled.div`
  padding:0%;
  margin: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(80, 45, 45, 0.3)
    ),
    url('https://img.krishijagran.com/media/54152/1601348576farmer.png');

  background-size: cover;
  background-position: center;
`;

const Wrapper = styled.div`
    height: 80%;
    background-color: white;
    padding: 0px 60px;
    border-radius: 10px;
`;

const Title = styled.h1`
     color: rgb(77, 1, 77);
    text-align: center;
`;




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
`;



 const inputs=[

      {
         id :1,
         name:"email",
         type:'email',
         errorMessage:'It should be valid email Address',
         placeholder:'email',
         required:true,
         label:'email'
      },
      {
        id :2,
        name:"password",
        type:'text',
        errorMessage:"Password should 8-16 character long and include atleast 1 number,1 special character",
        placeholder:'Password',
        required:true,
        pattern:'^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@[-`{-~]).{6,64}$',
        label:'Password'

      },
    ]

const SignIn = () => {

    const [values,setValues] = useState({
        email:'',
        password:'',
    })

    return (
    <Container> 

      <Wrapper>
        <Title>Login</Title>
                    
           {inputs.map((input)=>(
            <InputForm
               key={input.id}
               {...input}  
               value={values[input.name]}
                
               />
        ))}
       
          <Button type='submit'> Submit</Button>

      </Wrapper>
   
    </Container>
  );

}

export default SignIn;





    