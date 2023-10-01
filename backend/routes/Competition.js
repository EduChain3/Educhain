const express=require("express");
const CompetitionSchema=require("../db/models/Competition");
const StudentSchema=require("../db/models/student");
const router=express.Router();
let counter=0;
// Join The Competition With Code
router.post("/create",async(req,res)=>{
    counter++;
    await CompetitionSchema.create({
        Title:req.body.Title,
        Details:req.body.Details,
        JoinCode:counter,
        Organization:req.body.Organization,
        Image:req.body.Image
    })
    .then(()=>{
        res.send("Classroom Created");
    }
      
    )
})
//Get all the classrooms of an organziation
router.get("/:orgid/getall",async(req,res)=>{
    await CompetitionSchema.find({Organization:req.params.orgid})
    .then((comp)=>{
        if(comp.length!=0){
            res.send(comp);
        }
        else{
            res.send("No Competitions found");
        }
    })
    .catch((err)=>res.send(err))
})
// Get a particular Competition with competition ID
router.get("/:compid",async(req,res)=>{
    await CompetitionSchema.findOne({_id:req.params.compid})
    .then((comp)=>{
        if(comp){
            res.send(comp);
        }
        else{
            res.send("No such Compeition found");
        }
    })
    .catch((err)=>{
        res.send(err);
    })
})
// student to join with code 
router.put("/join",async (req,res)=>{
    // await ClassroomSchema.findOneAndUpdate({JoinCode:req.body.code},{$addToSet:{ParticipantStudent:[req.body.id]}}).then(async(result)=>{
    //     await studentSchema.updateOne({_id:req.body.id},{$addToSet:{Classrooms:[result._id]}}).then(res.send("Added to classroom"));
    //     console.log(result._id);
    // })
    // .catch(err=>res.send(err));\
    try {
        console.log(req.body.id);
        const competition = await CompetitionSchema.findOneAndUpdate(
          { JoinCode: req.body.code },
          { $addToSet: { ParticipantStudents: [req.body.id] } }
        );
    
        await StudentSchema.findOneAndUpdate(
          {_id:req.body.id },
          { $addToSet: { Competitions: [competition._id] } }
        ).then((ob)=>{
           res.send(ob);
            console.log(competition._id);
        })
        
      } catch (err) {
        res.send(err);
      }
});
router.get("/:compid/students",async(req,res)=>{
    await CompetitionSchema.find({
        _id:req.params.compid
    })
    .populate('ParticipantStudents')
    .then((comp)=>{
        res.send(comp);
    })
    .catch((err)=>{
        res.send(err);
    })
})
router.get("/",async(req,res)=>{
console.log("dsf");
await CompetitionSchema.find({}).then((co)=>{
    res.send(co);
})
})

module.exports=router;