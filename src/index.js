import dotenv from "dotenv";
dotenv.config('/.env');
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
mongoose.set('strictQuery', false);
import authRoute from './routes/authRoute.js'
import categoryRoute from './routes/categoryRoute.js'
import productRoute from  './routes/productRoutes.js'
import cors from 'cors'
import path from 'path'
import {fileURLToPath} from 'url'


const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)
const app=express();
app.use(cors())
app.use(express.json())
app.use(morgan("combined"))
app.use(express.static(path.join(__dirname,'../client/build')))

console.log(process.env.CLUSTER)
//! Database 
const db= async()=>{
    try {
        await mongoose.connect(process.env.CLUSTER)
        console.log(`db is connected`);
    } catch (error) {
        console.log(`Error in mongodb${error}`);
    }
}

db();

//! Routes 

app.use('/api/v1/auth',authRoute)
app.use('/api/v1/category',categoryRoute)
app.use('/api/v1/product',productRoute)

app.use("*",function(req,res){
    res.sendFile(path.join(__dirname,"../client/build/index.html"))
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running at ${process.env.PORT}`);
})