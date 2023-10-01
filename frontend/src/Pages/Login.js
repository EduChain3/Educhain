import React from "react";
import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import { AddWallet } from "../action";
import store from "../Store";
import "../CSS/design.css";
import metamask from "../assets/images/metamask.png";
import { useNavigate } from "react-router-dom";
function Login(){
    const navigate = useNavigate();
    const [walletaddress,setWalletAdress]=useState("");
    const [redirect,setRedirect]=useState("");
    const dispatch=useDispatch();   
    useEffect(()=>{
        getCurrentWalletConnected();
        addWalletListener();
    })
    const send=async()=>{

    }
    const connectWallet=async()=>{
        
        if(typeof window!="undefined" && typeof window.ethereum !="undefined"){
            try{
                /* Metamask is connected */
                await window.ethereum.request({method: "eth_requestAccounts"})
                .then((accounts)=>{
                    console.log(accounts[0]);
                     setWalletAdress(accounts[0])
                    console.log(typeof walletaddress);
                    dispatch(AddWallet(accounts[0]));
                
                    console.log(store.getState());
                    console.log(accounts[0]);
                    setTimeout(()=>{
                        navigate("/checkwallet");
                    },1000)
                })
               
            }
            catch(err){
                console.log(err);
            }
        }
        else{
            alert("Please Install Metamask");
        }
    }
    const addWalletListener=async()=>{

        if(typeof window!="undefined" && typeof window.ethereum !="undefined"){
            try{
                /* Metamask is connected */
              window.ethereum.on("accountsChanged",(accounts)=>{
                setWalletAdress(accounts[0]);
                console.log(accounts[0]);
              })
            }
            catch(err){
                console.log(err);
            }
        }
        else{
            setWalletAdress("");
            console.log("Please install metamask");
        }
    }
    const getCurrentWalletConnected=async()=>{
        if(typeof window!="undefined" && typeof window.ethereum !="undefined"){
            try{
                /* Metamask is connected */
                const accounts=await window.ethereum.request({method: "eth_accounts"});
                if(accounts.length >0){
                    setWalletAdress(accounts[0]);
                    console.log(accounts[0]);
                }
               
            }
            catch(err){
                console.log(err);
            }
        }
        else{
            console.log("Please install metamask");
        }
    }
    return(
          <div className="login-outer">
     
    <div className="content">
    <img src={metamask} style={{height:"200px"}}/>
    <br/>
    <button onClick={connectWallet} id="login-button">{walletaddress!=""?"Connected":"Connect"}</button>
    <h4 className="login-text">{walletaddress!="" ? "Connected :" + walletaddress:"Please Connect Your Metamask account to continue"}</h4>
    </div>
    </div>
    )
}
export default Login;