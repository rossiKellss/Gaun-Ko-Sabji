const express=require('express');
const userProductController=require('../controllers/User.Product.Controller')

const userProductRouter=express.Router();

userProductRouter.route('/getProducts').get(userProductController.getProducts);
userProductRouter.route("/image/download/:id")
.get(userProductController.downloadProductList);


module.exports=userProductRouter;
