const express=require('express');
const dotEnv=require('dotenv');
dotEnv.config();
const app=express();

// setting up middle wares
app.use(express.json());

// setting up route middlewares
// app.use('./')



app.listen(3000,()=>{
    console.log("server running ")
})