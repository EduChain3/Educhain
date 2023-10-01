const mongoose=require("mongoose");
const ClassroomSchema=new mongoose.Schema({
    Title:String, 
    Details:String,
    JoinCode:Number,
    Contact:String,
    Price:Number,
    Image:String,
    Video:String,
    ParticipantStudent:[{type:mongoose.Schema.Types.ObjectId,ref:"StudentSchema",default:undefined}],
    Organization:{type:mongoose.Schema.Types.ObjectId,ref:"OrganizationSchema"},
    OrgWallet:String
})
module.exports=mongoose.model("ClassroomSchema",ClassroomSchema);