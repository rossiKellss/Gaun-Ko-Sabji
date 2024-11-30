const jwt = require("jsonwebtoken");

const signAccessToken = (id) => {
  try {
    const token = jwt.sign(
      {
        id,
      },
      process.env.JWT_ACCESS_SECRET,
      { expiresIn: "60m" }
    );
    return token;
  } catch (err) {
    console.log(err);
  }
};
const signRefreshToken = (id) => {
  try {
    const token = jwt.sign(
      {
        id,
      },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: "7d" }
    );
    return token;
  } catch (err) {
    console.log(err);
  }
};

const verifyToken = (token) => {
  try{

    const userId = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
 
  return userId;
  }catch(err){
    
    
    if(err.name=="TokenExpiredError"){
      throw new Error("Token is expired");

    }
    throw new Error("Invalid Token");


  }
  
};

module.exports = { signAccessToken, signRefreshToken, verifyToken };
