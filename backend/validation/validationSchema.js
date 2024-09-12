const {z}=require('zod');
const Users = require('../models/UserModel');

const userRegistrationSchema=z.object({
    userName:z.string().min(2,{message:"Message must be at least 2 characters long"}),
    email:z.string().email({message:"Invalid email"}),
    password:z.string().min(8,{message:"Password must be at least 8 charaters long"}),
    phone:z.string().min(10,{message:"Phone number must be at least 10 digits"}),
    role:z.enum(['user','admin']).optional()


})

module.exports=userRegistrationSchema;