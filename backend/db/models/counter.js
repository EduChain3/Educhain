const mongoose=require("mongoose");
const counterSchema= new mongoose.Schema({
    counter:Number
})
module.exports=mongoose.model("counter",counterSchema);