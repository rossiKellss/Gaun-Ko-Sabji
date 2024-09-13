const Users=require('../models/UserModel');
const validateCode=async(req,res,next)=>{
    const {token}=req.body;

    try{
        const isValid=await Users.findOne({
            verificationCode:token,
            expiresIn:{$gt:Date.now()}
        })
        if(!isValid){
            return res.status(400).json({
                message:"Verification code is not valid"
            })
        }
        next();


    }catch(err){

    }



}