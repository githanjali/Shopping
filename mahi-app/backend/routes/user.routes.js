
const express = require("express");
const router = express.Router();

const userController = require("../Controllers/user.controller");

router.post('/user',  userController.create);
router.get('/user',  userController.findAll);

router.put('/user/:id',  userController.update);
router.delete('/user/:id',  userController.delete);


module.exports = router;
