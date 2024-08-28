const Products = require("../models/ProductModel");
const productControllers = {
  createProductList: async (req, res) => {
    const { ProductName, Category, Description, Price, Quantity } = req.body;
    const productExists = await Products.findOne({ ProductName });

    if (productExists) {
      return res.status(400).json({
        err: "Product already exists",
      });
    }
    try {
      const result = await Products.create({
        ProductName,
        Category,
        Price,
        Quantity,
        Description,
      });

      res.json({ data: result,message:"Item Added Successfully"});
    } catch (err) {

      return res.status(400).json({
        err: err.message,
        status: 400,
        message:"Items cannot be added"
      });
    }
  },
  getProductList: async (req, res) => {
    try{

      const products=await Products.find({});
      
      return(res.json({products}));
    }catch(err){
      return(
        res.status(500).json({
          message:"Internal Server Error"
        })
      )
    }
    

    

   
    res.json({data:"get"});
  },
  updateProductList: async (req, res) => {},
  deleteProductList: async (req, res) => {
    const {id}=req.params
    try{
      const deleteItem=await Products.findByIdAndDelete(id);
      if(!deleteItem){
        return(res.status(400).json({
          message:"Item not found"
        }))
      }
      res.status(200).json({
        message:"Item deleted sucessfully"
      })

    }catch(err){
      return(res.status(500).json({
        message:"Server error occured"
      }))


    }
  },
};

module.exports = productControllers;
