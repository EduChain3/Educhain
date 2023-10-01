const mongoose=require("mongoose");
const {Schema}=mongoose;
const OrganizationSchmea=new mongoose.Schema({
    Name:{type:String,unique:true},
    Email:{type:String,unique:true},
    Wallet:{type:String,unique:true},
    Mobile:{type:String,unique:true},
    // when creating any competitions, the competition ID will be stored in the array 
    //using which we can populate the array
    Competitons:[{type:Schema.Types.ObjectId,ref:"CompetitionSchema",  default: undefined}],
    Classroom:[{type:Schema.Types.ObjectId,ref:"ClassroomSchema",  default: undefined}]
})
module.exports=mongoose.model("OrganizationSchema",OrganizationSchmea);