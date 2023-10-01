import React from "react";
import Web3 from "web3";
import { buying } from "../abi/buyingabi";
import store from "../Store";
const web3 = new Web3(Web3.givenProvider);
const ContractAddress="0xEcA4bAc63e37E5B19663583659dF64996C5De79d";
const contract=new web3.eth.Contract(buying.abi, ContractAddress);

function Purchase(){
    const wallet="0xC6101Ba00f9f64350e7219B1685e2d40E6d58f1f";
   
    const getBalance=async()=>{
        const balance=await contract.methods.getBalance(wallet).call();
        console.log(balance/1000000000000000000);
  
    }
  
    console.log(wallet);
    return(
        <>
        <h1 onClick={()=>{
            getBalance();
        }}> Purchse Something</h1>
        </>
    )
}
export default Purchase;