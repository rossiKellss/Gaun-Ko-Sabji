const Users = require("../models/UserModel");
const { signAccessToken,  signRefreshToken,verifyToken } = require("../jwt");
const bcrypt = require("bcrypt");

const adminController={
    adminLogin:async(req,res)=>{
        const {phoneOrEmail,password}=req.body;
        const user= await Users.findOne({$or:[{email:phoneOrEmail},{phone:phoneOrEmail}]});
        
        if(!user){
            return res.status(400).json({
                success:false,
                message:"Invalid credentials"

            })
        }

        const verifyPassword=await bcrypt.compare(password,user.password);
        if(!verifyPassword){
            return res.status(401).json({
                success:false,
                message:"Invalid password"


            })
        }
      

        if(user.role!="admin"){
            return res.status(401).json({
                success:false,
                message:"Your credentials is not valid for admin"
            })

        }

        const accessToken=signAccessToken(user._id);
        const refreshToken=signRefreshToken(user._id);
        const tokenCred={
            httpOnly:true,
            secure:true
        }


        return res.status(200).cookie("accessToken",accessToken,tokenCred).cookie("refreshToken",refreshToken,tokenCred).json({
            success:true,
            message:"Logged in successfully",
            accessToken,
            refreshToken

        })


        

    },

    checkAuthentication:async(req,res)=>{
        const token=req.cookies.accessToken||req.header("Authorization")?.replace("Bearer","");
        try{

            verifyToken(token);
            return(res.status(200).json({
                success:true,
                message:"Token verified"


            }))
        }catch (err) {
            
            if (err.name == "TokenExpiredError") {
              return res.status(401).json({
                success: false,
                message: "Token is expired",
              });
            }
            return res.status(401).json({
              success: false,
              message: "Invalid access token",
            });
          }
        
        
        
       

    }
}

module.exports=adminController;