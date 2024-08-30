const express=require("express");
const productControllers = require("../controllers/productController");
// const upload=require('../upload'); 
const multer=require('multer')
const storage = multer()
  
  const upload = multer()



const productRouter=express.Router();

productRouter.route('/products').get(productControllers.getProductList);

productRouter.route('/products/:id').get(productControllers.getProductById);

productRouter.route('/products').post(productControllers.createProductList);

productRouter.route('/products/:id').put(productControllers.updateProductList);

productRouter.route('/products/:id').delete(productControllers.deleteProductList);

productRouter.route('/uploadCheck',upload.none()).post((req,res)=>{
    
   
    console.log(req.body);
    res.send("hello")
})



module.exports=productRouter;
