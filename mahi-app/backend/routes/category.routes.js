
const express = require("express");
const router = express.Router();

const categoryController = require("../Controllers/category.controller");

router.post('/category',  categoryController.create);
router.get('/category',  categoryController.findAll);

router.put('/category/:id',  categoryController.update);
router.delete('/category/:id',  categoryController.delete);


module.exports = router;