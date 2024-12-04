const mongoose=require("mongoose");

const paymentSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users",
        required:true
    },
    source:{
        type:String,
        enum:['esewa'],
        default:'esewa'
    },
    amount:{
        type:Number,
        required:true,
        default:0
    },
    order:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Orders",
        required:true,
        unique:true
    }
})