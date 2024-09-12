const express=require('express');
const userControllers=require('../controllers/userController');
const validate=require('../middleware/userValidation');
const userRegistrationSchema=require('../validation/validationSchema');


const userRouter=express.Router();
userRouter.route('/signup').post(userControllers.signUp);
userRouter.route('/signin').post(userControllers.signIn);


module.exports=userRouter;
