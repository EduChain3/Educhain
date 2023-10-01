import React, { useEffect } from "react";
import search from "../assets/images/checking.gif";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import store from "../Store";

function OrgCheckWallet(){
    const navigate=useNavigate();

    useEffect(()=>{
        const wallet= store.getState().wallet;
        axios.post("http://localhost:8000/api/org/",{Wallet:wallet})
        .then((sent)=>{
            console.log(sent);
            console.log("hello");
            if(sent.data){
                console.log(sent);
                console.log(sent.data);
                setTimeout(()=>{
                    // navigate("localhost:5173/dashboard/org-dashboard");
                    navigate("/trail");
                },1000)
              
            }
            else{
                console.log(sent.data);
               
                setTimeout(()=>{
                    navigate("/org/signup");
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
export default OrgCheckWallet;