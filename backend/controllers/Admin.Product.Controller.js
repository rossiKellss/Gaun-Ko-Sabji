const Products = require("../models/ProductModel");
const path = require("path");
const fs = require("fs");

const productControllers = {
  createProductList: async (req, res) => {
    const {filename}=req.file
    const { ProductName, Category, Price, Quantity } = req.body;
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
        
        fileName: filename,
      });

      res.json({ data: result, message: "Item Added Successfully", success: true });
    } catch (err) {
      return res.status(400).json({
        err: err.message,
        status: 400,
        message: "Items cannot be added",
      });
    }
  },
  getProductList: async (req, res) => {
    // its for filtering  from the database

    const { filter } = req.query;
    console.log(filter);

    try {
      if (filter == "FBD") {
        const result = await Products.find().sort({ dateAdded: 1 });
        return res.status(200).json({
          products: result,
        });
      } else if (filter == "FBN") {
        const result = await Products.find().sort({ ProductName: 1 });
        console.log(result);
        return res.status(200).json({
          products: result,
        });
      } else {
        const products = await Products.find({});

        return res.json({ success: true, products });
      }
    } catch (err) {
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },

  updateProductList: async (req, res) => {
    const { id } = req.params;
    console.log("the id is",id);
    console.log("The fields are",req.body);

    const { ProductName, Category, Price, Quantity } = req.body;
    
    try {
      await Products.findByIdAndUpdate(id, {
        ProductName,
        Price,
        Quantity,
        Category,
        
      });
      

      return res.status(200).json({
        message: "Product updated successfully",
        success: true,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Internal server error occured",
      });
    }
  },

  getProductById: async (req, res) => {
    const { id } = req.params;

    try {
      const findItem = await Products.findById(id);
      console.log(findItem);
      return res.status(200).json({
        products: findItem,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Internal Server Error",
      });
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

  downloadProductList: async (req, res) => {
    const filename = req.params.id;
    

    const imagePath = path.join(__dirname, `../images/${filename}`);
    

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

  searchProducts: async (req, res) => {
    const name = req.params.id;
 
    try {
      const searchedProducts = await Products.find({ ProductName: name });
      if (searchedProducts.length == 0) {
        return res.status(400).json({
          message: "No items found",
        });
      }
      res.status(200).json({
        products: searchedProducts,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Server Error",
      });
    }
  },

  filterProducts: async (req, res) => {
    const { filter } = req.query;

    try {
      if (id == "FBD") {
        const result = await Products.find().sort({ dateAdded: -1 });
        return res.status(200).json({
          product: result,
        });
      } else if (id == "FBN") {
        const result = await Products.find().sort({ ProductName: 1 });
        return res.status(200).json({
          product: result,
        });
      }
    } catch (err) {
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  },
};

module.exports = productControllers;
