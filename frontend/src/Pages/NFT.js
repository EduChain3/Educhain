import React from 'react';
import Web3 from "web3";
import {cert} from "../abi/abi";
import { useState } from 'react';
import axios from 'axios';
import mint from "../assets/images/mintingcloud.gif";
import { useNavigate, useParams } from 'react-router-dom';
import { json } from 'react-router-dom';
import "../CSS/NFT.css";
import { useLocation } from 'react-router-dom';
import store from '../Store';
const web3 = new Web3(Web3.givenProvider);
const secret="83a60edbc184a6ac84779957278b78869aad21810ff01e32093960238988f3aa";
const api="0e2abcd7eaa731041713"

const getcontract="0x5244412F1D60886f461c8336aFFa4c27Beb5E6Ea"
const contractAddress = "0xfdB8D2A404D007bE264Fd20c5182eB5c1b4fe67B";
const zkevmAddress="0x8C47466C3277bBA752Ce64Aa908c328EcaD9815E"
const certificate = new web3.eth.Contract(cert.abi, zkevmAddress);
// const minting=async()=>{
//     const acc2="0xC6101Ba00f9f64350e7219B1685e2d40E6d58f1f";
//     const acc="0x96c05D6f34b8C4AE9C26adcD5Da2566617700A60";
//     const gas = await certificate.methods.mintNFT("https://ipfs.io/ipfs/QmShC7bKepBsDCmxYaSBxfkJWLwmKoVwckcFbGDbR8yo9X",acc).estimateGas();
//     const post = await certificate.methods.mintNFT("https://ipfs.io/ipfs/QmShC7bKepBsDCmxYaSBxfkJWLwmKoVwckcFbGDbR8yo9X",acc).send({
//       from: acc2,
//       gas,
//     });
// }
function NFT(){
    // const {state} = useLocation();
    // const { id, wallet } = state;
    // console.log(wallet);
    const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [insti,setInsit]=useState("");
  const [fileImg, setFileImg] = useState(null);
  const [link,setLink]=useState("");
  const [loading,setLoading]=useState("");
  const [date,setDate]=useState("");
  const [loadtext,SetLoadText]=useState("Uploading To IPFS")
  const navigate=useNavigate();
  const uploadhidden="";
  var setDisplay="";
  const params=useParams();
  const SendFileToIPFS = async (e) => {
  

    if (fileImg) {
        try {
           
            const formData = new FormData();
            e.preventDefault();
            formData.append("file", fileImg);
            setDisplay="none"
            setLoading("1");
            await axios({
                method: "post",
                url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                data: formData,
                headers: {
                    'pinata_api_key': `00d37ca511c070785c33`,
                    'pinata_secret_api_key': `429691583d561cc51ea0ac91ddeb4b500e4fd5f70aea31b85329d7c95f69d8b2`,
                    "Content-Type": "multipart/form-data"
                },
            }).then(async(resFile)=>
            {
                const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
                console.log(ImgHash); 

                await axios({
                    method: "post",
                    url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
                    data: {
                        "name":"Certificate from RCOEM",
                        "image":ImgHash,
                        "attributes":[
                            {
                                "trait_type":"Name",
                                "value":name
                            },
                            {
                                "trait_type":"College",
                                "value":insti
                            },
                            {
                                "trait_type":"Minted for Wallet",
                                "value":"0X"
                            },
                            {
                                "trait_type":"Issued Date",
                                "value":date
                            }
                        ]
                     
                    }
                    ,
                    headers: {
                        'pinata_api_key': `00d37ca511c070785c33`,
                        'pinata_secret_api_key': `429691583d561cc51ea0ac91ddeb4b500e4fd5f70aea31b85329d7c95f69d8b2`
                    },
                }).then(async(res)=>{
                    SetLoadText("Minting NFT")
                const nfths = `https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`;
                const geth="0x5244412F1D60886f461c8336aFFa4c27Beb5E6Ea";
                const acc2="0xC6101Ba00f9f64350e7219B1685e2d40E6d58f1f";
                const cert="0x18003244B72a40fE14038CCF5Ca9f286F79f1AfE";
                const acc="0x96c05D6f34b8C4AE9C26adcD5Da2566617700A60";
                const gfg="0x733CceC86f17255F30E50A12264194754c2A58C7";
                const gas = await certificate.methods.mintNFT(nfths,params.studentWallet).estimateGas();
                await certificate.methods.mintNFT(nfths,params.studentWallet).send({
                  from: store.getState().wallet,
                  gas,
                }).then((post)=>{
                   
                    if(post.blockHash){
                        alert("NFT Minted");
                        setTimeout(()=>{
                            navigate("/trail");
                            // navigate("http://localhost:5173/dashboard/org-dashboard");
                        },1000)
                    }
                    else{

                    }
                })
                })
            })

            
//Take a look at your Pinata Pinned section, you will see a new file added to you list.   

// {
//     "title": "Certificate for Amit Mondal",
//     "type": "object",
//     "properties": {
//         "name": "HEllo WOrl",
//         "description": "Helo helo ji",
//         "imgae":  ImgHash
//     }
// }

        } catch (error) {
            console.log("Error sending File to IPFS: ")
            console.log(error)
        }
    }
}
    return(
//         <div className='login-outer'>
//          <div className='content'>
//          <form onSubmit={sendFileToIPFS}>
//             <label style={{
//                     border: "1px solid #ccc",
//                     display: "inline-block",
//                     padding: "6px 12px",
//                     cursor: "pointer",
//                     backgroundColor:"white",
//                     borderRadius:"15px",
//                     display:{uploadhidden}
                
//             }}>
//                 Click Here to Upload file
// <input type="file" onChange={(e) =>{setFileImg(e.target.files[0]);
//  setLink(URL.createObjectURL(e.target.files[0]));
// }} required style={{display:"none"}}/>
// </label>
// <br/>
// <br/>
// <img src={link} alt='' style={{
//     height:"100px",
//     width:"100px"
// }}/>
//  <input type="username" placeholder="Name" required value={name} style={{
//     width:"100px",
//     borderRadius:"15px",
//     border: "0px"
//  }}/>
// <br/>
// <button type='submit' >Mint NFT</button>            
// </form>

// <h4 className='login-text'> <b>Minting for</b> : Amit </h4>
// <h4 className='login-text'>Minting for Wallet : 0x96c05d6f34b8c4ae9c26adcd5da2566617700a60</h4>
//             {/* <button onClick={minting}>Mint NFT</button> */}
//             </div>
//         </div>
<div className="nft-outer">
 
    {
    loading==="1"?<>  <h4 style={{ fontSize: "16px",
    color: "rgb(119 119 119)"}}>Please Wait... <br/> {loadtext}</h4><img  src={mint}/>            </>:
    <>
   {/* <h1>Mint NFT</h1> */}
   <div className="nft-content" style={{
    marginTop:"20px"
   }} >
   <h1>Mint NFT</h1>
   <p><span style={{
       fontWeight:"bolder",
       color:'grey'
   }}>Minting for {params.studentWallet}</span> </p>
    <form onSubmit={SendFileToIPFS}>
   <div className="field">
   <span className="bx bxs-user"></span>
   
   <input type="username" placeholder="Name"  value={name} onChange={(e)=>{
    setName(e.target.value);
    console.log(date)}}  />
 </div>
 <div className="field">
 <span className='bx bxs-graduation'></span>
   <input type="Enter Institute Name" placeholder="Organization Name" value={insti} onChange={e=>setInsit(e.target.value)}/>
 </div>
 <br/>
 <div className="field" style={{
    position:"relative",
    top:"-20px"
 }}>
   <span className="bx bxs-calendar"></span>
   <input type="date" placeholder="Issuing Date"  onChange={async(e)=>{if(e){
    setDate(e.target.value);
 
   }}}  />
 </div>
<br/>
    {
    link===""?<label style={{
        width: "100%",
  margin: 0,
  color: "#fff",
  background: "#1FB264",
  border: 0,
  padding: "10px",
  borderRadius: "4px",
  borderBottom: "4px solid #15824B",
  transition: "all .2s ease",
  outline: "none",
  textTransform: "uppercase",
  fontWeight: 700,

    }}> Add Certificate Image
        <input type="file" onChange={(e) =>{setFileImg(e.target.files[0]);
        setLink(URL.createObjectURL(e.target.files[0]));
       }} required style={{display:"none"}}/>
    </label> :<img src={link} alt='' style={{
        width:"200px",
        height:"100px",
        display:{setDisplay}
    }}/>
   }
   <br/>
   <br/>
   <button type='submit' id="nft-button" >Mint</button>
  </form>
 
 
   </div>

</>
}
   </div>
    )
}
export default NFT;