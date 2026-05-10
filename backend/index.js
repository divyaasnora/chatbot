import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import chatbotRoutes from './routes/chatbot.route.js';

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDb connected")
}).catch((err)=>{
    console.log("Error connecting to Mongodb",err)
})
app.use("/bot/v1/",chatbotRoutes);

app.listen(port,()=>{
    console.log(`Server is running on PORT ${port}`);
})


