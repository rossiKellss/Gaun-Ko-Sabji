const jwt = require("jsonwebtoken");

const signAccessToken = (id) => {
  try {
    const token = jwt.sign(
      {
        id,
      },
      process.env.JWT_ACCESS_SECRET,
      { expiresIn: "15m" }
    );
    return token;
  } catch (err) {
    console.log(err);
  }
};
const signRefreshToken = (id) => {
  try {
    const token = jwt.sign(
      {
        id,
      },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: "7d" }
    );
    return token;
  } catch (err) {
    console.log(err);
  }
};

const verifyToken = (token) => {
  const userId = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
  return userId;
};

module.exports = { signAccessToken, signRefreshToken, verifyToken };
