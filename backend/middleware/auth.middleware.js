const { verifyToken } = require("../jwt");
const Users = require("../models/UserModel");

const validateJWT = async (req, res, next) => {
  try {
    const userToken =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer", "");
    if (!userToken) {
      res.status(401).json({
        success: false,
        message: "Unauthorized token",
      });
    }
    const { id } = verifyToken(userToken);
    const user = await Users.findById(id).select("-refreshToken -password");
    if (!user) {
      res.status(401).json({
        success: false,
        message: "Invalid Access Token",
      });
    }
    req.user = user;
    next();
  } catch (error) {}
};

module.exports = validateJWT;
