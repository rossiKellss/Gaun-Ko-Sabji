const Products=require('../models/ProductModel');
const path=require('path');
const userProductController={
     getProducts:async(req,res)=>{
        try{
            const products=await Products.find({});
            res.json({success:true,data:products});


        }
        catch(err){
            console.log(err);

        }
        
     },

     downloadProductList: async (req, res) => {
        const filename = req.params.id;
        
    
        const imagePath = path.join(__dirname, `../images/${filename}`);
        console.log(imagePath);
        
    
        try {
          if (fs.existsSync(imagePath)) {
            return res.status(200).sendFile(imagePath);
          } else {
            return res.status(404).json({
              message: "Img not found",
            });
          }
        } catch (err) {
          return res.status(500).json({
            message: "Internal Server Error",
          });
        }
      },


}

module.exports=userProductController;