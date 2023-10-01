const express=require("express");
const StudentSchema=require("../db/models/student");
const router=express.Router();
router.post("/signup",(req,res)=>{
    console.log(req.body);
    StudentSchema.create({
        Name:req.body.Name,
        Email:req.body.Email,
        Wallet:req.body.Wallet,
        Mobile:req.body.Mobile,
        College:req.body.College
    })
    .then(
        res.send(true)
    )
})
router.post("/login",async(req,res)=>{
    await StudentSchema.findOne({Wallet:req.body.Wallet}).exec().then((student)=>{if(student){res.send(student)}else{res.send("No Such account found")}}).catch(err=>res.send(err))
});
//below API is used to check if accoun exist or not
router.post("/",(req,res)=>{
    StudentSchema.find({Wallet:req.body.Wallet})
    .populate("Classrooms").then((Student)=>{
        console.log(req.body);
        if(Student.length!=0){
            res.send(true);
        }
        else{
            res.send(false);
        }
       
    })
});
router.get("/:wallet",(req,res)=>{
    StudentSchema.findOne({
        Wallet:req.params.wallet
    }).populate("Classrooms").then((Student)=>{
        console.log(Student.Classrooms);
        res.send(Student.Classrooms);
    })
})
// Get Student Info 
router.get("/getstudent/:wallet",(req,res)=>{
    StudentSchema.findOne({
        Wallet:req.params.wallet
    }).then((student)=>{
        res.send(student);
    })
})
module.exports=router;
