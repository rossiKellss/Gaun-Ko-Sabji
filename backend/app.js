const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser=require("cookie-parser");
const AdminRouter = require("./routes/Admin.router");
const userRouter = require("./routes/User.Router");
const connectToDb = require("./connection/connection");

const app = express();

var corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
  credentials: true,
};

// connectToDb

connectToDb(process.env.MONGO_URI);

// setting up middle wares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

// setting up route middlewares
app.use("/api/admin", AdminRouter);
app.use("/api/auth", userRouter);

module.exports = app;
