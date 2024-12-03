const mongoose=require('mongoose');
const { required } = require('../validation/forgotPassSchema');

const productSchema=new mongoose.Schema({
    ProductName:{
        type:String,
        required:true,
    },

    Category:{
        type:String,
        required:true,
        
    },

    Price:{
        type:Number,
        required:true,
        min:0

    },

    Quantity:{
        type:Number,
        required:true,
        min:0

    },

    fileName: {
        type: String,
       
    },

   

   

     

    dateAdded:{
        type:Date,
        required:true,
        default:Date.now
    }



})
const Products=mongoose.model('Products',productSchema);

module.exports=Products;