const express = require("express");
const productControllers = require("../controllers/productController");
const upload = require("../upload");

const productRouter = express.Router();

productRouter.route("/products").get(productControllers.getProductList);

productRouter.route("/products/:id").get(productControllers.getProductById);

productRouter.post(
  "/products",
  upload.single("Picture"),
  productControllers.createProductList
);

productRouter.route("/products/:id").put(productControllers.updateProductList);

productRouter
  .route("/products/:id")
  .delete(productControllers.deleteProductList);

productRouter
  .route("/image/download/:id")
  .get(productControllers.downloadProductList);

productRouter.route('/products/search/:id').get(productControllers.searchProducts)

module.exports = productRouter;
