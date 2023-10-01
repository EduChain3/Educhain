import React, { useEffect } from "react";
import "../CSS/buying.css";
import store from "../Store";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { buying } from "../abi/buyingabi";
import Web3 from "web3";
const web3 = new Web3(Web3.givenProvider);
const ContractAddress="0xEcA4bAc63e37E5B19663583659dF64996C5De79d";
const zkevmAddress="0xcb80454977B3FF4420f05E2ed740981ef2222bF7";
const contract=new web3.eth.Contract(buying.abi, zkevmAddress);
function OrganziationSignup(){
  const navigate=useNavigate();
  async function makePayment(organizationAddress, amount) {
    console.log("Yaha AA gaye");
    console.log(store.getState().wallet);
    console.log(amount);
    try {
      // Send the payment transaction
      console.log("Yaha ");
      console.log(organizationAddress);
      const final= Web3.utils.toWei(amount.toString(), 'ether');
      console.log(final);
      await contract.methods.payOrganization(organizationAddress).send({ value: final
      , from : store.getState().wallet
      }).then(async(post)=>{
        console.log("yaha bhi aa gaye");
        console.log(post);
        if(post.blockHash){
          await axios({
            method: "put",
            url: "https://backend-nft.onrender.com/api/classroom/join",
            data: {
              Wallet:store.getState().wallet,
              id:data._id
            }
        }).then(()=>{
          alert("paid");
          console.log("Posted");
          navigate("/course")
        })
        }
      })
    } catch (error) {
      console.log(error);
      console.error('Error making payment:', error);
    }
  }
  const [data,SetData]=useState({});

  const params=useParams();
 useEffect(()=>{
    axios.get(`https://backend-nft.onrender.com/api/classroom/classinfo/${params.courseid}`)
    .then((res)=>{
        console.log("Cat");
        console.log(res.data[0]);
        SetData(res.data[0]);
        
    })
 },[])
    return(
        <div className="buying-outer">
     <h1>{data.Title}</h1>
        <div className="buying-content">
        <h2 style={{position:"relative",top:"-20px"}}>Details</h2>
      

        <div class="field">
        <input type="username" placeholder={data.Title} required value="" style={{padding:"20px"}}/>
      </div>

      <div class="field">
        <input type="email" placeholder="Duration : 50 hours" value=""  style={{padding:"20px"}}/>
      </div>

      <div class="field">
        <input type="phone" placeholder={data.Price+" eth"} required style={{padding:"20px"}}/>
      </div>
      <p><span style={{
            fontWeight:"bolder"
        }}>Connected Wallet:</span> {store.getState().wallet.slice(0,6)+"..."+store.getState().wallet.slice(31)} </p>
        <button  id="buying-button" style={{ color: "#fff",
  background: "#1FB264",position:"relative",top:"-14px"}} onClick={()=>{
    makePayment(data.OrgWallet,data.Price);
  }}>Buy</button>
        </div>
        </div>
    )
}
export default OrganziationSignup;