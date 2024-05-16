import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
const app = express();
app.use(express.json());
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connect to MongoDB')
}).catch((err)=>{
    console.log(err)
})
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});

app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);

//middleware error handler
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
});
 
