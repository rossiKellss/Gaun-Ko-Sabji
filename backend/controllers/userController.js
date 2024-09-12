const Users=require('../models/UserModel')
const generateConfirmationCode=require('../code_generator');
const sendConfirmationCode=require('../email_service');
const {signToken,verifyToken}=require('../jwt')
const bcrypt=require('bcrypt');

const userControllers={
    signUp:async(req,res)=>{
        
        try{
            const {email,userName,password,phone}=req.body;
            const userExists=await Users.findOne({email
                
            });
            
            if(userExists){
                return res.status(400).json({
                    success:false,
                    message:"Email is already taken"

                })
            }
            const phoneNoExists=await Users.findOne({phone});
            if(phoneNoExists){
                return res.status(400).json({
                    success:false,
                    message:"Phone no is already taken"

                })

            }
            const confirmationCode=generateConfirmationCode();
           
           
            
            const result=await Users.create({email,userName,password,phone,confirmationCode});
            
             const confirmEmail=await sendConfirmationCode(confirmationCode,email);
             if(!confirmEmail){
                return res.status(401).json({
                    success:false,
                    message:"Couldn't send email"
                })
                

             }
             
             return res.status(200).json({
                success:true,
                data:result
            })
            
            

        }catch(err){
            console.log(err)
            return res.status(500).json({
                message:"Internal server error"
            })

        }
       

    },
    signIn:async(req,res)=>{
        const {email,password}=req.body;
        try{
            const user=await Users.findOne({email});
            if(!user){
               return res.status(400).json({
                    success:false,
                    message:"Invalid credentials"
                })
            }
            if(!user.isVerified){
               return res.status(400).json({
                    success:false,
                    message:"Account is not verified"
                })
            }
            const isMatch=await bcrypt.compare(password,user.password);
            if(!isMatch){
               return res.status(400).json({
                    success:false,
                    message:"Invalid credentials"
                })
            }
            const token=signToken(user.email);
            return res.status(200).json({
                success:true,
                token
            })
            
        }catch(err){
            console.log(err)
            res.status(500).json({
                message:"Internal server occured"
            })

        }

    },
    confirm:async(req,res)=>{
        try{
            const {email,confirmationCode}=req.body
            const user=await Users.findOne({email});
            if(!user){
                return res.status(400).json({
                    sucess:false,
                    message:"User doesn't exists"
                })
            }
            const code=user.confirmationCode;
            
            

            if(code!=confirmationCode){
                return res.status(400).json({
                    success:false,
                    message:"Enter the correct code"
                })
            }
            user.isVerified=true;
            user.confirmationCode=null;
            await user.save();
            
            const token=signToken(user.email);
            return (res.status(200).json({
                success:true,
                token
            }))
           

        }catch(err){
            return res.status(500).json({
                message:"Internal server occured"
            })

        }
        

    },
    forgotPass:async(req,res)=>{
        const {email}=req.body;
        try{
            const user=await Users.findOne({email});
            if(!user){
                return res.status(400).json({
                    message:"Email not found"
                })
            }
            const code=generateConfirmationCode();
            user.confirmationCode=code;
            await user.save();
            await sendConfirmationCode(code,email);
            return res.status(200).json({
                message:"Verification code has been sucessfully sent to your email"
            })

        }catch(err){
            console.log(err)
            return res.status(500).json({
                message:"Internal server error"
            })

        }
    },
    changePass:async(req,res)=>{
        const {email,confirmationCode}=req.body;
        try{
            const user=await Users.findOne({email});
            if(!user){
                return res.status(400).json({
                    message:"Email not found"
                })
            }
            const userCode=user.confirmationCode;
            if(userCode!=confirmationCode){
                return res.status(400).json({
                    message:"Invalid code"
                })
            }
            
        }catch(err){
            console.log(err);
        }
    }



}

module.exports=userControllers;