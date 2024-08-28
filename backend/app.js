const express = require("express");
const morgan = require("morgan");
const cors=require('cors');

const productRouter = require("./routes/productRoute");
const connectToDb = require("./connection/connection");

const app = express();

var corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}



// connectToDb

connectToDb(process.env.MONGO_URI);



// setting up middle wares
app.use(express.json());
app.use(cors(corsOptions));

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

// setting up route middlewares
app.use("/api", productRouter);

module.exports = app;
