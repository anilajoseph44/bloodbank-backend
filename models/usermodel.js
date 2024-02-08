const mongoose=require("mongoose")

const userschema=new mongoose.Schema(
    {
        name:String,
        bloodgroup:String,
        age:String,
        phno:String
    }
)

module.exports=mongoose.model("user",userschema)