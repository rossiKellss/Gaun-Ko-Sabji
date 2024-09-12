const jwt=require('jsonwebtoken');

const signToken=(id,email)=>{
    try{
        const token= jwt.sign({
            id,email
        },process.env.JWT_SECRET)
        return token;

    }catch(err){
        console.log(err)
    }
   


}

const verifyToken=(token)=>{

}

module.exports={signToken,verifyToken}