const express=require("express");
const ClassroomSchema=require("../db/models/Classroom");
const CounterSchema=require("../db/models/counter");
const studentSchema=require("../db/models/student");
const OrganizationSchema=require("../db/models/organization");
const { default: mongoose } = require("mongoose");
var ObjectID = require('mongodb').ObjectID;
const router=express.Router();
let counter=0;

router.get("/all/classes",async(req,res)=>{
    await ClassroomSchema.find({}).then((classes)=>{
        res.send(classes);
    })
})
// Create a Class
router.post("/create",async(req,res)=>{
    let orgid;
    await OrganizationSchema.findOne({
        Wallet:req.body.Wallet
    }).then(async(org)=>{
        orgid=org._id;
        counter++;
        await ClassroomSchema.create({
            Title:req.body.Title,
            Details:req.body.Details,
            Contact:req.body.Contact,
            Price:req.body.Price,
            JoinCode:counter,
            Video:req.body.Video,
            Organization:orgid,
            Image:req.body.Image,
            OrgWallet:req.body.Wallet
        })
        .then(async(output)=>{
            console.log(output);
            res.send("Classroom Created");
        }
          
        )
    })
   
})
// Get all the classes of a organization
router.get("/:Wallet/getall",async(req,res)=>{
    await OrganizationSchema.findOne({
        Wallet:req.params.Wallet
    })
    .then(async(org)=>{
        let orgid=org._id;
        await ClassroomSchema.find({Organization:orgid})
        .then((classes)=>{
            if(classes.length!=0){
                res.send(classes);
            }
            else{
                res.send("No classes found");
            }
        })
        .catch((err)=>res.send(err))
    })
   
})
// From The Class Id get all the details
router.get("/:classid",async(req,res)=>{
    await ClassroomSchema.findOne({_id:req.params.classid})
    .then((classroom)=>{
        if(classroom){
            res.send(classroom.ParticipantStudent);
        }
        else{
            res.send("No such classroom found");
        }
    })
    .catch((err)=>{
        res.send(err);
    })
})

// Joining the Classroom with Classroom Id
router.put("/join",async (req,res)=>{
    try {
        //Wallet of student will be taken 
        // And id of the classrom in which student is to be enrolled
        const student=await studentSchema.findOne({
            Wallet:req.body.Wallet
        })
        const student_id=student._id;
        const classroom = await ClassroomSchema.findOneAndUpdate(
          { _id: req.body.id },
          { $addToSet: { ParticipantStudent: [student_id] } }
        );
    
        await studentSchema.findOneAndUpdate(
          {_id:student_id },
          { $addToSet: { Classrooms: [classroom._id] } }
        ).then((ob)=>{
            console.log(res.boyd.practicpantId);
           res.send("Joined");
            console.log(classroom._id);
        })
        
      } catch (err) {
        res.send(err);
      }
});
//Getting all the students in a classroom
router.get("/:classid/students",async(req,res)=>{
    await ClassroomSchema.find({
        _id:req.params.classid
    })
    .populate('ParticipantStudent')
    .then((classroom)=>{
        res.send(classroom[0].ParticipantStudent);
    })
    .catch((err)=>{
        res.send(err);
    })
})
// Get all the classrooms irrespective of The Organization 
router.get("/classinfo/:classid",async(req,res)=>{
    await ClassroomSchema.find({
        _id:req.params.classid
    })
    .then((out)=>{
        res.send(out);
    })
})
module.exports=router;
