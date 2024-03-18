const express=require('express');
const mongoose =require('mongoose')
const app=express();
const dotenv=require('dotenv');
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connected');
}).catch((err)=>{
    console.log(err);
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})