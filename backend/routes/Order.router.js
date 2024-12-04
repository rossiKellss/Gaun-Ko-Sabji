const express=require('express');
const orderRouter=express.Router();
const orderController=require('../controllers/Order.Controller')

orderRouter.route('/get/:id').get(orderController.getOrderById);

orderRouter.route('/getOrder').get(orderController.getOrder);

orderRouter.route('/createOrder').post(orderController.createOrder);

orderRouter.route('/update/:id').put(orderController.updateOrder);

orderRouter.route('/delete/:id').delete(orderController.deleteOrder);





module.exports=orderRouter;
