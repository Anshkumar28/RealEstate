 import UserModel from "../models/user.models.js";
 import bcryptjs from "bcryptjs";
 export const  signup= async(req,res)=>{
 //   console.log(req.body);
 const {username,email,password} = req.body;
 const hashedpassword=bcryptjs.hashSync(password,10);
 const newUser=UserModel({username,email,password:hashedpassword});
 try{
    await newUser.save();
 } catch(err){
console.log(err);
 }
}