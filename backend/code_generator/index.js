const crypto=require('crypto');
const generateConfirmationCode=()=>{
    return crypto.randomInt(100000,1000000)
}

module.exports=generateConfirmationCode;