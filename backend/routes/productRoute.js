const express=require("express");

const productRouter=express.Router();

productRouter.route('/api/products').get((req,res)=>{
    res.send("products")

});

productRouter.route('/api/products').post((req,res)=>{
    res.send("products")

});

productRouter.route('/api/products').patch((req,res)=>{
    res.send("products")

});

productRouter.route('/api/products').delete((req,res)=>{
    res.send("products")

});



module.exports=productRouter;
