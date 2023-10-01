const mongoose=require("mongoose");
const {Schema}=mongoose;
const studentSchema=new mongoose.Schema({
    // password nahi lageg kyuki wallet se sing in karege
    Name:String,
    Email:String,
    Mobile:String,
    College:String,
    Wallet:String,
    // We would be storing the classroom ID when any student registers in classroom 
    // using that we can populate are Classroom array
    Competitions:[{
        type: Schema.Types.ObjectID,ref:"CompetitionSchema",default:undefined
    }],
    Classrooms:[
        {
            type: Schema.Types.ObjectId,ref:"ClassroomSchema",default:undefined
        }
    ]
    //MintedAddress:String
})
module.exports=mongoose.model("StudentSchema",studentSchema);