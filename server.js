const express=require('express');
const colors= require('colors');
const morgan =require('morgan');
const dotenv=require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
// rest object
connectDB();
const app=express();

// middlewares
app.use(express.json())
app.use(morgan('dev'));

// routes
app.use("/api/v1/user",require("./routes/userRoutes"))
app.use("/api/v1/admin",require("./routes/adminRoutes"))
app.use("/api/v1/doctor",require("./routes/doctorRoutes"))
const port=process.env.PORT || 8000;
// listen port
app.listen(port,()=>{
   console.log(`Serving Running in ${process.env.DEV_MODE} mode on port ${process.env.PORT}`.bgCyan.white); 
})