const Orders=require("../models/OrderModel");
const orderController={

    createOrder:async(req,res)=>{
        const data=req.body;
        console.log(data);
        try{
            const order=await Orders(data);
            await order.save();
           return res.status(201).json({success:true,message:"Order created successfully"});
        }catch(err){
            console.log(err);
           return res.status(500).json({success:false,message:"Some error occured"})

        }
    },

    getOrder:async(req,res)=>{
        try{
            const order=await Orders.findById(req.params.id).populate("product");
            if(!order){
                return res.status(404).json({success:false,message:"Order not found"})
            }
                return res
                  .status(200)
                  .json({ success: true, message: "Order found", data: order });
            
        }
        catch(err){
            return res.status(500).json({success:false,message:"Some error occured"})

        }
    },

    getOrderById:async(req,res)=>{
        const id=req.params.id;
        try {
          const order = await Orders.findById(id);
          if (!order) {
            res.status(401).json({
                success:false,
                message:"Item not found"
            });
          }
        } catch (err) {
          console.log(err);
          res.status(500).json({
            success:false,
            message:"Some server error occured"
        });

        }
    },

    updateOrder:async(req,res)=>{
        const id=req.params.id;
        const status=req.body.status;
        try{
            const order=await Orders.findByIdAndUpdate(id,status,{new:true});
            if(!order){
                res.status(401).json({success:false,message:"Product update failed"})
            }
           return res.status(200).json({success:true,message:"Order updated successfully"})
        }catch(err){
           return res.status(500).json({success:false,message:"Some error occured"})

        }
    },

    deleteOrder:async(req,res)=>{
        const id=req.params.id;
        try{
            const order=await Orders.findByIdAndDelete(id);
            if(!order){
                return res.status(200).json({success:true,message:"Order deleted successfully"})

            }
        }catch(err){
           return res.status(500).json({success:false,message:"Some error occured"})
        }

    }


       
        
    
}

module.exports=orderController;


    
