const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const userrouter=require("./controllers/userRouter")


const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://anilasandrajose01:sandrajoseph99@cluster0.vpgykyq.mongodb.net/BloodbankDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
})

app.use("/api/bloodbank/",userrouter)

app.listen(3001,()=>
{
    console.log("server running")
})