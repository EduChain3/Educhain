const express=require("express");
const OrganizationSchema=require("../db/models/organization");
const router=express.Router();
router.post("/signup",(req,res)=>{
    OrganizationSchema.create({
        Name:req.body.Name,
        Email:req.body.Email,
        Wallet:req.body.Wallet,
        Mobile:req.body.Mobile
    })
    .then(
        res.send("Organization Added")
    )
})
router.post("/login",async(req,res)=>{
    await OrganizationSchema.findOne({Wallet:req.body.Wallet}).exec().then((org)=>{if(org){res.send(org)}else{res.send("No Such account found")}}).catch(err=>res.send(err))
});
//below API is used to check if accoun exist or not
router.post("/",(req,res)=>{
    OrganizationSchema.find({Wallet:req.body.Wallet})
    .then((Student)=>{
        console.log(req.body);
        if(Student.length!=0){
            res.send(true);
        }
        else{
            res.send(false);
        }
       
    })
});

router.get("/getorg/:wallet",async(req,res)=>{
    console.log(req.params.wallet);
    await OrganizationSchema.findOne({
        Wallet:req.params.wallet
    }).then((Orga)=>{
        console.log(Orga);
        res.send(Orga);
    })
})


module.exports=router;
