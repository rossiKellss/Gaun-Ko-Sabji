const { verifyToken } = require("../jwt");
const Users = require("../models/UserModel");

const validateJWT = async (req, res, next) => {
  try {
    const userToken =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer", "");
    
    if (!userToken) {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }

    // console.log("The user token is",userToken);
    const {id} = verifyToken(userToken);
    if(!id){
      console.log("token expired");
      return res.status(401).json({
        message:"Token expired"
      })
    }
    

    
    const user = await Users.findById(id).select("-refreshToken -password");
    
    if (!user) {
     return res.status(401).json({
        success: false,
        message: "Invalid Access Token",
      });
    }
    

    req.user = user;
    

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = validateJWT;
