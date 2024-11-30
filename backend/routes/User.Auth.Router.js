const express = require("express");
const userControllers = require("../controllers/User.Auth.Controller");
const validate = require("../middleware/userValidation.middleware");
const changePasswordSchema = require("../validation/forgotPassSchema");
const userRegistrationSchema = require("../validation/validationSchema");
const validateJWT=require("../middleware/auth.middleware");

const userAuthRouter = express.Router();
 userAuthRouter
  .route("/signup")
  .post(validate(userRegistrationSchema), userControllers.signUp);
 userAuthRouter
.route("/signin")
.post(userControllers.signIn);
 userAuthRouter
.route("/confirm-user")
.post(userControllers.confirmUser);
 userAuthRouter
.route("/forgot-password")
.post(userControllers.forgotPass);
 userAuthRouter
.route("/validate-otp")
.post(userControllers.validateOtp); userAuthRouter
  .route("/change-password/:id")
  .post(validate(changePasswordSchema), userControllers.changePassword);

// secured routes userAuthRouter.route('/log-out').get(validateJWT,userControllers.logOut);
 userAuthRouter.route('/refresh-token').post(userControllers.validateRefreshTokens);
 userAuthRouter.route('/test-point').get(validateJWT,(req,res)=>{
  res.status(200).json({
    message:"test point on run"
  })
})

module.exports = userAuthRouter;
