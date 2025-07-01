const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const authRouter=require("./routes/auth")
require("dotenv").config()

const app=express()
app.use(cors())
app.use(express.json())
app.use("/api/auth",authRouter)

mongoose.connect(process.env.MONGO_URL , () =>{
    console.log("Connected to MongoDB")
})

app.listen(5000,() =>{
    console.log("Server is running on port 5000")
})