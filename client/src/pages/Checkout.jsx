import {Modal } from "antd";
// import 'antd/dist/.css';
import {db} from '../Config/Firebase';
  import { collection, addDoc } from "firebase/firestore"; 
import { doc, getDoc } from "firebase/firestore";
import { useParams } from 'react-router-dom';
import { useState,useEffect } from "react";
import React from "react";
import styled from "styled-components";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    /* url("https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"); */
  background-size: cover;
  background-position: center;
`;

const Wrapper = styled.div`
    ${'' /* height: 75%; */}
    width:40%;
    background-color: white;
    padding: 50px 60px;
    border-radius: 10px;
`;

const Title = styled.h1`
   fontSize:20px;
     color: rgb(77, 1, 77);
    text-align: center;
`;




const BButton = styled.button`
    ${'' /* width: 80%;
    height: 50px;
    padding: 10px; */}
     width:'50%';
    border: none;
    height:"30px";
    background-color: rebeccapurple;
    color: white;
       margin-left:20px;
           font-size: 14px;
    cursor: pointer;
       margin-top: 35px;
    ${'' /* border-radius: 5px;
    font-weight: bold;

 
 
    margin-bottom: 30px; */}
`;


const Input=styled.input`
     ${'' /* border:none; */}
    height:0px;
   padding:20px

`;



  
const Checkout=()=>{


   const {idd}=useParams();
   console.log(idd);
  // console.log(idd);
      let arr=[];
        const [billChargeModal, setBillChargeModal] = useState(false);
        const [isAgreementOn, setIsAgreementOn] = useState(false);
      const [data,setData]=useState({})

 
          useEffect(() => {

          // data=null;  
         const fetchData= async () => {
        try{
             const docRef = doc(db, "users", idd);
             const docSnap = await getDoc(docRef);

              arr.push(docSnap.data())
          
                 
               setData(docSnap.data());
            //  } else {
             
                // console.log("No such document!");
            // }   
          }catch(err){
              console.log(err)
            }
       }

        fetchData();
      },[])


         const name=data.displayName;
        const Description= data.Description;
        const price=data.Price;
      

        const product={
            name:name,
            Description:Description,
            price:price
        }
    
      const [formData,setFormdata]=useState({})
    
       const handleInput = (e) => {
       const id = e.target.id;
       const value = e.target.value;

    setFormdata({ ...formData, [id]: value });
    // console.log(formData);


  
  };
  const handleAgreement = () =>{
      addDetails();
  }
   const addDetails=async()=>{
    setIsAgreementOn(false);
     setBillChargeModal(true);
     const docRef = await addDoc(collection(db, "orders"), {
          formData
       });
     console.log("Document written with ID: ", docRef.id);
   }
     
   async function handleToken(token, addresses) {
    const response = await axios.post(process.env.REACT_APP_BACKEND_URL+"/checkout",{ token, product });
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }
    
      return(
  
    
    <Container>
      
       <Wrapper>
           <Title style={{marginBottom:'0px'}}>Check Out Form</Title>
            <div style={{margin:'10px'}} className='Form-inputs'>
               <label >Full Name</label>
              <Input onChange={handleInput}  id='name' placeholder='Full Name'></Input>

              <label style={{paddingTop:'10px'}}>Address</label>
             <Input  onChange={handleInput} id='add' placeholder='Address' type="text"></Input>

            
               <label  style={{paddingTop:'10px'}}>Pincode</label>
               <Input  onChange={handleInput} id='pin' placeholder='Pincode' inputmode="numeric" type="text"  pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$"></Input>



             <label style={{paddingTop:'10px'}}>No of days </label>
            <Input   onChange={handleInput} id='days' type="number" min={1} placeholder='Number of days you want to rent the equipment'></Input>
         
            
            <div style=
              {{
                  paddingTop:'10px',
                  display:'flex',
                  paddingRight:'80px'
  
               }}>
                 {
                  formData.days>0  ?  
                   <h1
                    style={{
                        width:'60%',
                    }}
                    >{`₹${price*formData.days}`}
                  
                     </h1>
                     
                   :  
                    
                      <h1
                    style={{
                        width:'60%',
                    }}
                    >{`₹${price}`}
                  
                     </h1>
            

                 }
            {formData.name && formData.add && formData.pin && formData.days  &&  <button className="primary" onClick={() => setIsAgreementOn(true)}>Check out</button>}

            </div>
      
        
         </div>
               
       </Wrapper>


        <Modal
        title="Charge Bill"
        open={billChargeModal}
        footer={false}
        onCancel={() => {
          setBillChargeModal(false)
          setIsAgreementOn(false)
        }}
      >
        {" "}
       
        
      <h3 style={{
        fontFamily:' "Source Sans Pro", sans-serif',
            color: '#000d6b',
          fontWeight: '600',
      }}>
           Pay Using Debit Card
      </h3>

      

       <StripeCheckout
        stripeKey='pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233'
        token={handleToken}
        currency="INR"
        amount={product.price * 100}
        name="Rental Services"
        billingAddress
        shippingAddress
        onClick={()=>setBillChargeModal(false)}
      />
         {" "}
      </Modal>

      <Modal
        title="TERMS AND CONDITIONS FOR EQUIPMENT RENTAL"
        open={isAgreementOn}
        onOk={handleAgreement}
        onCancel={() => setIsAgreementOn(false)}
      >
        <p>Agreement to Rent: By renting equipment from us, you agree to all the terms and conditions outlined in this agreement.</p>
        <p>Rental Period: The rental period starts on the date specified in the agreement and ends on the date specified. Any additional days of rental will be charged at the daily rental rate.</p>
        <p>Payment: The full rental payment is due at the beginning of the rental period. A security deposit may also be required and will be refunded at the end of the rental period, provided the equipment is returned in the same condition it was rented.</p>
        <p>Use of Equipment: The equipment may only be used for the purposes for which it was intended. Any other use of the equipment may result in damage and the renter will be responsible for any repairs or replacement costs.</p>
        <p>Care of Equipment: The renter is responsible for the proper care and maintenance of the equipment during the rental period. Any damage caused by neglect or misuse of the equipment will be the responsibility of the renter.</p>
        <p>Return of Equipment: The equipment must be returned to us on or before the agreed upon date. If the equipment is not returned on time, the renter will be charged additional rental fees for each day the equipment is late. If the equipment is not returned within 7 days of the rental period ending, the renter will be charged the full replacement cost of the equipment.</p>
        <p>Termination: We reserve the right to terminate this agreement at any time if the renter fails to comply with any of the terms and conditions outlined in this agreement.</p>
        <p>Liability: We are not responsible for any injury, loss or damage that may occur as a result of the use of the equipment.</p>
        <p>Indemnification: The renter agrees to indemnify and hold us harmless from any claims, damages, or expenses arising from the use or misuse of the equipment during the rental period.</p>
        <p>Governing Law: This agreement shall be governed by the laws of the jurisdiction in which the equipment is rented.</p>
        <p>Entire Agreement: This agreement constitutes the entire agreement between the renter and us and supersedes all prior agreements and understandings, whether written or oral.</p>

      </Modal>
               
    </Container>
)
}

export default Checkout;