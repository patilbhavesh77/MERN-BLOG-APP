import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique : true
    },
    email:{
        type:String,
        required:true,
        uniqye:true
    },
    password:{
        type:String,
        required:true
    },
},{timestamps:true},
);

const user = mongoose.model('User', userSchema);

export default user;