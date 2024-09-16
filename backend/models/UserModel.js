const { model, Schema } = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    reqired: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  confirmationCode: {
    type: String,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verificationCode: {
    type: String,
  },
  expiresIn: {
    type: Date,
  },

  dateCreated: {
    type: Date,
    default: Date.now,
  },
});
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
const Users = new model("Users", userSchema);
module.exports = Users;
