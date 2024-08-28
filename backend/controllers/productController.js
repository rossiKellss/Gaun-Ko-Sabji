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
    res.send("get");
  },
  updateProductList: async (req, res) => {},
  deleteProductList: async (req, res) => {},
};

module.exports = productControllers;
