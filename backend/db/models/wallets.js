const mongoose=require("mongoose");
const walletschema=new mongoose.Schema({
    address:String
});
module.exports=mongoose.model("walletSchema",walletschema);