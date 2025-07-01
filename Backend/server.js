const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const authRouter=require("./routes/auth")
require("dotenv").config()

const app=express()
app.use(cors())
app.use(express.json())
app.use("/api/auth",authRouter)

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
  }
}

startServer();