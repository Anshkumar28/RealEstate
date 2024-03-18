const mongoose=require('mongoose');
userSchema=new Mongoose.Schema({
    username: {
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true
    }
},{timestamps: true});
const UserModel =mongoose.model('User',userSchema)
export default UserModel;