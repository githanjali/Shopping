const express = require("express");
const router = express.Router();

const cartController = require("../Controllers/cart.controller");

router.post('/cart',  cartController.create);
router.get('/cart',  cartController.findAll);

router.put('/cart/:id',  cartController.update);
router.delete('/cart/:id',  cartController.delete);


module.exports = router;