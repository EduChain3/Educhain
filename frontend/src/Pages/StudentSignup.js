import React from "react";
import "../CSS/student-signup.css";
import store from "../Store";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function SignUP(){
  const navigate=useNavigate();
    const [name,SetName]=useState("");
    const [email,SetEmail]=useState("");
    const [phone,SetPhone]=useState("");
    const [college,SetCollege]=useState("");
    const onSubmit=()=>{
      console.log("Hello");
      if(name!=="" && email!=="" && phone!=="" && college!==""){
        axios.post("https://backend-nft.onrender.com/api/student/signup",{
          Name:name,
          Email:email,
          Wallet:store.getState().wallet,
          College:college,
          Mobile:phone
        }).then((res)=>{
          if(res.data){
            alert("Posted");
            navigate("/course")
          }
        })
        
      }
    }
    return(
        <div className="student-signup-outer">
     <h1>Looks Like you don't have an account</h1>
        <div className="student-signup-content">
        <h2>Sign Up</h2>
       

        <div class="field">
        <span class="bx bxs-user"></span>
        <input type="username" placeholder="Name" required value={name} onChange={(e)=>{SetName(e.target.value)} }/>
      </div>

      <div class="field">
        <span class="bx bxs-envelope"></span>
        <input type="email" placeholder="Email" required onChange={(e)=>{SetEmail(e.target.value)} }/>
      </div>

      <div class="field">
        <span class="bx bxs-mobile"></span>
        <input type="phone" placeholder="Mobile" required onChange={(e)=>{SetPhone(e.target.value)} }/>
      </div>
      <div class="field">
      <span class='bx bxs-graduation'></span>
        <input type="College" placeholder="College" required onChange={(e)=>{SetCollege(e.target.value); console.log(college);} }/>
      </div>
      <p><span style={{
            fontWeight:"bolder"
        }}>Connected Wallet:</span> {store.getState().wallet.slice(0,6)+"..."+store.getState().wallet.slice(31)}</p>
        <button onClick={()=>{onSubmit()}} id="student-signup-button">Submit</button>
        </div>
        </div>
    )
}
export default SignUP;