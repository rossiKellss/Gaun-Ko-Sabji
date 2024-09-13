const {z}=require('zod');
const changePasswordSchema=z.object({
    newPassword:z.string().min(8,{message:"Password must be 8 characters long"}) 
})
module.exports=changePasswordSchema;