const express=require("express");
const router=express.Router();
const walletRoute=require("./checkwallet");
const OrganizationRoute=require("./Organization");
const StudentRoute=require("./Student");
const ClassroomRoute=require("./Classroom");
const CompetitionRouter=require("./Competition");
router.get("/",(req,res)=>{
    res.send("This is reserved");
})
router.use("/checkwallet",walletRoute);
router.use("/org",OrganizationRoute);
router.use("/student",StudentRoute);
router.use("/classroom",ClassroomRoute);
router.use("/competition",CompetitionRouter);
module.exports=router;