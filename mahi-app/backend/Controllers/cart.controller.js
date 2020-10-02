const Cart = require("../models/cart.model");

// Create and Save a new Order
exports.create = (req,res) =>{
    if(!req.body){
        res.status(400).send({
            message:"content cannot be empty"
        });
    }

// Create a New Cart
const cart = new Cart({
    product_id : req.body.product_id,
    user_id : req.body.user_id,
    quantity : req.body.quantity,
    amount : req.body.amount
})

// Save Cart in the database

Cart.create(cart,(err,data)=>{
    if(err){
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving orders."
        })
    }else res.send(data);
});
}

// Retrieve all Cart from the database.

exports.findAll = (req,res) => {
    Cart.getAll((err,data)=>{
        if(err){
            res.status(500).send({message: err.message || "Some error occurred while retrieving Cart."})
        }else res.send(data);
    });
};

// Update a Cart by id in the database

exports.update = (req,res)=>{
    if(!req.body){
        res.status(400).send({
            message :  "Content can not be empty!"
        })
    }
    Cart.updateById(req.params.id,new Cart(req.body),(err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    messsage: `Cart is not found with that id ${req.params.id}`
                })
            }else{
                res.status(500).send({
                    message: "Error while updating CartId"+req.params.id
                })
            }
        }else{
            res.status(200).send(data);
        }
    })
}

// delete the Cart by id from the database
exports.delete =(req,res)=>{
    Cart.remove(req.params.id,(err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message: "Cart is not found with this id"+req.params.id
                })
            }else{
                res.status(500).send({
                    message : "Error while deleting the Cart with id"+req.params.id
                })
            }
           
        }else{
            res.status(200).send({message:"deleted successfully."})
        }
    })

}


