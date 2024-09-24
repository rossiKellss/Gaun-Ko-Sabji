const Users = require("../models/UserModel");
const generateConfirmationCode = require("../code_generator");
const sendConfirmationCode = require("../email_service");
const { signAccessToken, verifyToken, signRefreshToken } = require("../jwt");
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
      const user = await Users.findOne({
        $or: [{ email: phoneOrEmail }, { phone: phoneOrEmail }],
      });
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
      const accessToken = signAccessToken(user._id);
      const refreshToken = signRefreshToken(user._id);
      user.refreshToken = refreshToken;
      const tokenCred = {
        httpOnly: true,
        secure: true,
      };
      await user.save();
      return res
        .status(200)
        .cookie("accessToken", accessToken, tokenCred)
        .cookie("refreshToken", refreshToken, tokenCred)
        .json({
          success: true,
          accessToken,
          refreshToken,
          message: "Signed in successfully",
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
      const confirmationCode = req.body.otp;

      const user = await Users.findOne({
        confirmationCode,
        expiresIn: { $gte: Date.now() },
      });

      if (!user) {
        return res.status(402).json({
          sucess: false,
          message: "Confirmation code invalid or expired",
        });
      }
      const accessToken = signAccessToken(user._id);
      const refreshToken = signRefreshToken(user._id);

      user.isVerified = true;
      user.confirmationCode = null;
      user.refreshToken = refreshToken;
      await user.save();

      const tokenCred = {
        httpOnly: true,
        secure: true,
      };

      return res
        .status(200)
        .cookie("accessToken", accessToken, tokenCred)
        .cookie("refreshToken", refreshToken, tokenCred)
        .json({
          success: true,
          accessToken,
          refreshToken,
          message: "Signed in successfully",
        });
    } catch (err) {
      return res.status(500).json({
        message: "Internal server occure",
      });
    }
  },
  forgotPass: async (req, res) => {
    const { email } = req.body;
    try {
      const user = await Users.findOne({ email });
      if (!user) {
        return res.status(400).json({
          success: false,
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
        success: true,
        data: user,
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
    const { otp } = req.body;

    try {
      const isValid = await Users.findOne({
        confirmationCode: otp,
        expiresIn: { $gte: Date.now() },
      });

      if (!isValid) {
        return res.status(400).json({
          success: false,

          message: "Verification code is not valid or expired",
        });
      }

      isValid.confirmationCode = undefined;
      await isValid.save();

      return res.status(200).json({
        success: true,
        data: isValid,
        message: "OTP is verified",
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  },

  changePassword: async (req, res) => {
    const { newPassword } = req.body;
    const { id } = req.params;
    console.log(id);
    console.log(newPassword);
    try {
      const user = await Users.findOne({ _id: id });
      console.log("the user is", user);
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "User not found",
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

  logOut: async (req, res) => {
    await Users.findByIdAndUpdate(
      req.user._id,
      {
        $set: {
          refreshToken: undefined,
        },
      },
      {
        new: true,
      }
    );
    const options = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .clearCookie("accessToken", options)
      .clearCookie("refreshToken", options)
      .json({
        success: true,
        message: "Logged out succesfully",
      });
  },
  validateRefreshTokens:async(req,res)=>{

    const incomingRefreshToken=req.cookies.refreshToken||req.body.refreshToken;
    if(!incomingRefreshToken){
      return res.status(401).json({
        success:false,
        message:"Invalid token"

      })
    }
    const verifiedToken=verifyToken(incomingRefreshToken,process.env.JWT_REFRESH_SECRET);
    
    if(!verifiedToken){
     return res.status(401).json({
        success:false,
        message:"Token not verified"

      })

    }
    const {id}=verifiedToken;
    const user=await User.findById(id);

    
    if(user?.refreshToken!==incomingRefreshToken){
      res.status(401).json({
        success:false,
        message:"Refresh token expired or not valid"

      })


    }
    const newAccessToken=signAccessToken(id);
    const newRefreshToken=signRefreshToken(id);

    const options={
      httpOnly:true,
      secure:true
    }

    res.status(200)
    .cookie('accessToken',newAccessToken,options)
    .cookie('refreshToken',newRefreshToken,options)
    .json({
      success:true,
      accessToken:newAccessToken,
      refreshToken:newRefreshToken
    })


  }
};

module.exports = userControllers;
