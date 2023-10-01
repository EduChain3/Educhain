import React from 'react';
import '../CSS/orgChoose.css';
import studentImg from '../assets/images/add-new-course.png';
import orgImg from '../assets/images/your-courses-removebg-preview.png';
import yourIncome from "../assets/images/your-income.png";
import { useNavigate } from 'react-router-dom';
import Web3 from 'web3';
import { useEffect } from 'react';
import { useState } from 'react';
import store from '../Store';
import {buying} from "../abi/buyingabi";
import balImag from "../assets/images/balance.png";
const web3 = new Web3(Web3.givenProvider);
const ContractAddress="0xEcA4bAc63e37E5B19663583659dF64996C5De79d";
const zkevmAddress="0xcb80454977B3FF4420f05E2ed740981ef2222bF7";
const contract=new web3.eth.Contract(buying.abi, zkevmAddress);
function OrgChoose() {
  async function withdrawBalance() {
    try {
      // Send the withdrawal transaction
      const transaction = await contract.methods.withdraw().send(
        {from : store.getState().wallet}
      );
      
      // Transaction receipt
      console.log('Transaction receipt:', transaction);
    } catch (error) {
      console.error('Error withdrawing balance:', error);
    }
  }
  const navigate=useNavigate();
  const [balance,SetBalance]=useState();
  async function getOrganizationBalance(organizationAddress) {
    try {
      // Call the contract function
      const bal = await contract.methods.getBalance(organizationAddress).call();
      SetBalance(bal/1000000000000000000);
      // Organization balance
      console.log(balance);
    } catch (error) {
      alert("Error Getting Organization Balance")
      console.error('Error getting organization balance:', error);
    }
  }
useEffect(()=>{
  getOrganizationBalance(store.getState().wallet);

},[])
  return (
    <div className="Org-Choose-container">
      <h1 className='Org-Choose-h1'>Remaining Balance : {balance} eth</h1>
      <div className="Choose-box-container">
        <div className="Choose-box Choose-student" onClick={()=>{
           navigate("/trail");
        }}>
          <img src={orgImg} alt="Student" className='Choose-img'/>
          <p>Go To DashBoard</p>
        </div>
        {/* <div className="Choose-box Choose-organization" onClick={()=>{
           navigate("/orgDash");
        }}>
          <img src={orgImg} alt="Organization" className='Choose-img'/>
          <p>Your Courses</p>
        </div> */}
        <div className="Choose-box Choose-organization" onClick={()=>{
          withdrawBalance();
        }}>
          <img src={balImag} alt="Organization" className='Choose-img'/>
          <p>Withdraw</p>
        </div>
      </div>
    </div>
  );
}

export default OrgChoose;
