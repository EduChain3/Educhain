const express=require("express");
const router=express.Router();
const walletSchema=require("../db/models/wallets");
router.get("/",async(req,res)=>{
    console.log(req.body);
    var wallet=await req.body.address;
    const docs=await walletSchema.findOne({'address':wallet});
    if(docs){
        res.send("email exists");
    }
    else{
        res.send("mail does not exists");
        await walletSchema.create({
            address:wallet
        })
    }
})
module.exports=router;