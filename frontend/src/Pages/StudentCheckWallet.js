import React, { useEffect } from "react";
import search from "../assets/images/checking.gif";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import store from "../Store";

function CheckWallet(){
    const navigate=useNavigate();

    useEffect(()=>{
        const wallet= store.getState().wallet;
        axios.post("http://localhost:8000/api/student",{Wallet:wallet})
        .then((sent)=>{
            if(sent.data){
                console.log("HEllo");
                console.log(sent.data);
                setTimeout(()=>{
                    navigate("/course");
                },1000)
              
            }
            else{
                console.log(sent.data);
               
                setTimeout(()=>{
                    navigate("/signup");
                },1000)
            }
        })
    },[])
    return(
        <div style={{textAlign:"center"}}>
        <img src={search} />
        
        <h4 style={{ fontSize: "16px",
color: "rgb(119 119 119)",textAlign:"center"}}>Please Wait. Checking if the account exist or not</h4>
    </div>
   
       
    )
}
export default CheckWallet;