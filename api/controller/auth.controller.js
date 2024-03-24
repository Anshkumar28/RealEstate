 import UserModel from "../models/user.models.js";
 import bcryptjs from "bcryptjs";
import { errHandler } from "../utils/err.js";
 export const  signup= async(req,res,next)=>{
 //   console.log(req.body);
 const {username,email,password} = await req.body;
 const hashedpassword= await bcryptjs.hashSync(password,10);
 const newUser=UserModel({username,email,password:hashedpassword});
 try{
    await newUser.save();
    res.status(201).json('User created succesfully')

 } catch(err){

next(errHandler(550,'error from function'));
 }
}
