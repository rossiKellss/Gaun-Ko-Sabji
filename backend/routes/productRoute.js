const express=require("express");
const productControllers = require("../controllers/productController");
const upload=require('../uploadImg');



const productRouter=express.Router();

productRouter.route('/products').get(productControllers.getProductList);

productRouter.route('/products').post(productControllers.createProductList);

productRouter.route('/products').patch(productControllers.updateProductList);

productRouter.route('/products').delete(productControllers.deleteProductList);



module.exports=productRouter;
