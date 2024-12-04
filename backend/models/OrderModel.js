const mongoose=require('mongoose');


const orderSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    payment_method:{
        type:String,
        required:true,
        default:"Esewa"
    },

    products:
        {
            items:[{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Products",
                required:true

            }],
            
        }
    ,

    status:{
        type:String,
       
        enum:["Created","Paid and Processing", "Shipping", "Delivered"],
        default:"Created",
        required:true
    },

    deliveryInformation:{
        fullName:{
            type:String,
            required:true
        },
        phoneNumber:{
            type:String,
            required:true
        },
        cityOrDistrict:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true,
        },
        landMark:{
            type:String,
            required:true
        }

    },

    timestamps:{
        type:Date
    }


    

})
const Orders=mongoose.model("Orders",orderSchema);
module.exports=Orders;