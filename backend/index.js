const express=require("express");
const cors=require("cors");
const db=require("./db/mong-connect");
const app=express();
const router=require("./routes/index");
const bodyParser=require("body-parser")
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(cors({
    origin:"*"
}))
app.get("/",(req,res)=>{
    res.send("Hello");
})
app.use("/api",jsonParser,router);
db.connect();
app.listen(8000,()=>{
    console.log("listening on port"+ process.env.PORT);
})