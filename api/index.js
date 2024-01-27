import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js'

mongoose.connect('mongodb://localhost:27017/Blogdata').then(()=>{
    console.log("Database is connected")
}).catch((err)=>{
    console.log(err);
});

const app = express();
app.use(express.json());


app.listen(3000,()=>{
    console.log("Server is working")
})

app.use('/api/user', userRoutes);
app.use('/api/auth',authRoutes);
app.use((err,req,res,next)=>{
    const statusCode = err.statuscode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success : false,
        statusCode,
        message
    });
});