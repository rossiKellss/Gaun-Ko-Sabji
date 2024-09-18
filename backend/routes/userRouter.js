const express = require("express");
const userControllers = require("../controllers/userController");
const validate = require("../middleware/userValidation");
const changePasswordSchema = require("../validation/forgotPassSchema");
const userRegistrationSchema = require("../validation/validationSchema");

const userRouter = express.Router();
userRouter
  .route("/signup")
  .post(validate(userRegistrationSchema), userControllers.signUp);
userRouter.route("/signin").post(userControllers.signIn);
userRouter.route("/confirm-user").post(userControllers.confirmUser);
userRouter.route("/forgot-password").post(userControllers.forgotPass);
userRouter.route("/validate-otp").post(userControllers.validateOtp);
userRouter
  .route("/change-password/:id")
  .post(validate(changePasswordSchema),userControllers.changePassword);

module.exports = userRouter;
