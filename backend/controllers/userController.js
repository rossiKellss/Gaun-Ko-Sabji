const Users=require('../models/UserModel')
const generateConfirmationCode=require('../code_generator');
const sendConfirmationCode=require('../email_service');

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
           
           
            
            const result=await Users.create(req.body);
            
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

    },
    confirm:async(req,res)=>{
        
    }

}

module.exports=userControllers;