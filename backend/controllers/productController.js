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

      res.json({ data: result, message: "Item Added Successfully" });
    } catch (err) {
      return res.status(400).json({
        err: err.message,
        status: 400,
        message: "Items cannot be added",
      });
    }
  },
  getProductList: async (req, res) => {
    try {
      const products = await Products.find({});

      return res.json({ products });
    } catch (err) {
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
  updateProductList: async (req, res) => {
    const { id } = req.params;
   
    const { ProductName, Category, Price, Description, Quantity } = req.body;

    try {
      await Products.findByIdAndUpdate(id, {
        ProductName,
        Description,
        Price,
        Quantity,
        Category,
      });
      
      return res.status(200).json({
        message: "Product updated successfully",
      });
    } catch (err) {
      return res.status(500).json({
        message: "Internal server error occured",
      });
    }
  },
  getProductById:async(req,res)=>{
    const {id}=req.params;
    
    try{
      const findItem=await Products.findById(id);
      return res.status(200).json({
        findItem
      })
    }catch(err){
      return(res.status(500).json({
        message:"Internal Server Error"
      }))
    }

  },
  deleteProductList: async (req, res) => {
    const { id } = req.params;
    try {
      const deleteItem = await Products.findByIdAndDelete(id);
      if (!deleteItem) {
        return res.status(400).json({
          message: "Item not found",
        });
      }
      res.status(200).json({
        message: "Item deleted sucessfully",
      });
    } catch (err) {
      return res.status(500).json({
        message: "Server error occured",
      });
    }
  },
};

module.exports = productControllers;
