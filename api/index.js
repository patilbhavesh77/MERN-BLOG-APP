import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/Blogdata').then(()=>{
    console.log("Database is connected")
}).catch((err)=>{
    console.log(err);
});

const app = express();


app.listen(3000,()=>{
    console.log("Server is working")
})
