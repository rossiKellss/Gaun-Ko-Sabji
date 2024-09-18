const Users = require("../models/UserModel");
const generateConfirmationCode = require("../code_generator");
const sendConfirmationCode = require("../email_service");
const { signToken, verifyToken } = require("../jwt");
const bcrypt = require("bcrypt");

const userControllers = {
  signUp: async (req, res) => {
    try {
      const { email, userName, password, phone } = req.body;
      const userExists = await Users.findOne({ email });

      if (userExists) {
        return res.status(400).json({
          success: false,
          message: "Email is already taken",
        });
      }
      const phoneNoExists = await Users.findOne({ phone });
      if (phoneNoExists) {
        return res.status(400).json({
          success: false,
          message: "Phone no is already taken",
        });
      }
      const confirmationCode = generateConfirmationCode();
      const expiresIn = Date.now() + 36000000;

      const result = await Users.create({
        email,
        userName,
        password,
        phone,
        confirmationCode,
        expiresIn,
      });

      const confirmEmail = await sendConfirmationCode(confirmationCode, email);
      if (!confirmEmail) {
        return res.status(401).json({
          success: false,
          message: "Couldn't send email",
        });
      }

      return res.status(200).json({
        success: true,
        data: result,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  },
  signIn: async (req, res) => {
    const { phoneOrEmail, password } = req.body;
    try {
      const user = await Users.findOne({ $or:[{email:phoneOrEmail},{phone:phoneOrEmail}] });
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "Invalid credentials",
        });
      }
      if (!user.isVerified) {
        return res.status(400).json({
          success: false,
          message: "Account is not verified",
        });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          success: false,
          message: "Invalid credentials",
        });
      }
      const token = signToken(user.email);
      return res.status(200).json({
        success: true,
        token,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Internal server occured",
      });
    }
  },
  confirmUser: async (req, res) => {
    

    try {
      const  confirmationCode  = req.body.otp;
      console.log("the confirmation code is",confirmationCode)
      const user = await Users.findOne({
        confirmationCode,
        expiresIn: { $gte: Date.now() },
      });
      console.log(user);
     
      if (!user) {
        return res.status(402).json({
          sucess: false,
          message: "Confirmation code invalid or expired",
        });
      }

      user.isVerified = true;
      user.confirmationCode = null;
      await user.save();

      const token = signToken(user.email);
      return res.status(200).json({
        success: true,
        token,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Internal server occured",
      });
    }
  },
  forgotPass: async (req, res) => {
    const { email } = req.body;
    try {
      const user = await Users.findOne({ email });
      if (!user) {
        return res.status(400).json({
          success:false,
          message: "Email not found",
        });
      }

      const code = generateConfirmationCode();
      const expires = Date.now() + 3600000;
      user.confirmationCode = code;
      user.expiresIn = expires;
      await user.save();
      await sendConfirmationCode(code, email);
      return res.status(200).json({
        success:true,
        data:user,
        message: "Verification code has been sucessfully sent to your email",
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  },
  validateOtp: async (req, res) => {
    const {otp}=req.body;

    try {
      const isValid = await Users.findOne({
        confirmationCode: otp,
        expiresIn: { $gte: Date.now() },
      });

      if (!isValid) {
        return res.status(400).json({
          success: false,
          data:isValid,
          message: "Verification code is not valid or expired",
        });
      }
      req.otp = otp;

      return res.status(200).json({
        success: true,
        message: "Token is verified",
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  },

  changePassword: async (req, res) => {
    const token = req.token;
    const { newPassword } = req.body;
    try {
      const user = await Users.findOne({ token });
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "Token invalid or expired",
        });
      }
      user.password = newPassword;
      await user.save();
      return res.status(200).json({
        success: true,
        message: "Password changed successfully",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Internal server error occured",
      });
    }
  },
};

module.exports = userControllers;
