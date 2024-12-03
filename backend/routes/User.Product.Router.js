const express=require('express');
const userProductController=require('../controllers/User.Product.Controller');
const userControllers = require('../controllers/User.Auth.Controller');

const userProductRouter=express.Router();

userProductRouter.route('/getProducts').get(userProductController.getProducts);
userProductRouter.route("/image/download/:id")
.get(userProductController.downloadProductImage);
userProductRouter.route("/addProduct").post(userProductController.addProduct);

userProductRouter.route("/checkOut").post(userProductController.addCheckOut)



module.exports=userProductRouter;
