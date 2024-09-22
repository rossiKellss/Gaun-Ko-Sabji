const jwt=require('jsonwebtoken');

const signAccessToken=(id,email)=>{
    try{
        const token= jwt.sign({
            id,email
        },process.env.JWT_ACCESS_SECRET,{expiresIn:'15m'})
        return token;

    }catch(err){
        console.log(err)
    }
   


}
const signRefreshToken=(id,email)=>{
    try{
        const token= jwt.sign({
            id,email
        },process.env.JWT_REFRESH_SECRET,{expiresIn:'7d'})
        return token;

    }catch(err){
        console.log(err);

    }
}

const verifyToken=(token)=>{

}

module.exports={signAccessToken,signRefreshToken,verifyToken}