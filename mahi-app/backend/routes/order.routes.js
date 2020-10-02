const express = require("express");
const router = express.Router();

const orderController = require("../Controllers/order.controller");

router.post('/order',  orderController.create);
router.get('/order',  orderController.findAll);

router.put('/order/:id',  orderController.update);
router.delete('/order/:id',  orderController.delete);


module.exports = router;