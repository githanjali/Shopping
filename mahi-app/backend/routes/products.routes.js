
const express = require("express");
const router = express.Router();

const ProductsController = require("../Controllers/products.controller");

router.post('/products',  ProductsController.create);
router.get('/products',  ProductsController.findAll);

router.put('/product/:id',  ProductsController.update);
router.delete('/product/:id',  ProductsController.delete);


module.exports = router;

 

   