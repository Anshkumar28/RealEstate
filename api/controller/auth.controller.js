 import UserModel from "../models/user.models.js";
 import bcryptjs from "bcryptjs";
 import jwt from "jsonwebtoken";
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
};
export const signin=async(req,res,next)=>{
   const {email,password} = await req.body;
   try{
      const validUser=await UserModel.findOne({email})
      if(!validUser) return next(errHandler(404,'User does not exists'));
      const validPassword=bcryptjs.compareSync(password,validUser.password);
   if (!validPassword )return next(errHandler(401,"Wrong credentials"));
   const token=jwt.sign({id:validUser._id},process.env.JWT_SECRET)
   const {password:pass,...rest}=validUser._doc;
   res.cookie('access_token',token,{httpOnly:true}).status(200).json(rest)
   }
   catch(error){
next(error)
   }
}
