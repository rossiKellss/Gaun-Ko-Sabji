const express=require('express');
const userControllers=require('../controllers/userController');
const validate=require('../middleware/userValidation');
const changePasswordSchema=require('../validation/forgotPassSchema')
const userRegistrationSchema=require('../validation/validationSchema');


const userRouter=express.Router();
userRouter.route('/signup').post(validate(userRegistrationSchema),userControllers.signUp);
userRouter.route('/signin').post(userControllers.signIn);
userRouter.route('/confirm').post(userControllers.confirm)
userRouter.route('/forgot-password').post(userControllers.forgotPass)
userRouter.route('/validate-token/:token').get(userControllers.validateToken);
userRouter.route('/change-password').post(validate(changePasswordSchema),userControllers.changePassword);


module.exports=userRouter;
