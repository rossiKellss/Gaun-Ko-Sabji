const express = require("express");
const productControllers = require("../controllers/productController");
const upload = require("../upload");

const productRouter = express.Router();

productRouter.route("/products").get(productControllers.getProductList);

productRouter.route("/products/:id").get(productControllers.getProductById);

// productRouter.route('/products').post(productControllers.createProductList);
productRouter.post(
  "/products",
  upload.single("Picture"),
  productControllers.createProductList
);

productRouter.route("/products/:id").put(productControllers.updateProductList);

productRouter
  .route("/products/:id")
  .delete(productControllers.deleteProductList);

// productRouter.route('/uploadCheck',upload.single('files')).post((req,res)=>{

//     console.log(req.body);
//     res.send("hello")
// })

productRouter.post("/uploadCheck", upload.single("files"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
});

module.exports = productRouter;
