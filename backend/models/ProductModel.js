const mongoose=require('mongoose');

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

    imageUrl: {
        type: String,
       
    },

    Description:{
        type:String,
        required:true
    },

     

    dateAdded:{
        type:Date,
        required:true,
        default:Date.now
    }



})
const Products=mongoose.model('Products',productSchema);

module.exports=Products;