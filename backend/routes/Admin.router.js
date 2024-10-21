const express = require("express");
const productControllers = require("../controllers/Admin.Product.Controller");
const upload = require("../upload");
const validateJWT=require('../middleware/auth.middleware')
const isAdmin=require('../middleware/authorization.middleware')
const adminController=require('../controllers/Admin.Auth.Controller')

const AdminRouter = express.Router();
AdminRouter.route('/signin').post(adminController.adminLogin);
AdminRouter.route('/auth/me').get(adminController.checkAuthentication)

AdminRouter.route("/products").get(validateJWT,isAdmin("admin"),productControllers.getProductList);

AdminRouter.route("/products/:id").get(productControllers.getProductById);

AdminRouter.post(
  "/products",
  upload.single("Picture"),
  productControllers.createProductList
);

AdminRouter.put('/products/:id',upload.single("Picture"),productControllers.updateProductList)

AdminRouter.route("/products/:id").put(productControllers.updateProductList);

AdminRouter
  .route("/products/:id")
  .delete(productControllers.deleteProductList);

AdminRouter
  .route("/image/download/:id")
  .get(productControllers.downloadProductList);

AdminRouter.route('/products/search/:id').get(productControllers.searchProducts)



AdminRouter.route('/products/filter').get(productControllers.filterProducts)

module.exports = AdminRouter;
