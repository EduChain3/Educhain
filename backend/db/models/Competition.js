const mongoose=require("mongoose");
const CompetitionSchema=new mongoose.Schema({
    Title:String,
    Details:String,
    ParticipantStudents:[{type:mongoose.Schema.Types.ObjectId,ref:"StudentSchema",default:undefined}],
    Organization:{type:mongoose.Schema.Types.ObjectId,ref:"OrganizationSchema"},
    JoinCode:Number,
    Image:String
});
module.exports=mongoose.model("CompetitionSchema",CompetitionSchema);