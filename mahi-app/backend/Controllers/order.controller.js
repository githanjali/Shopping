const Order = require("../models/order.model");

// Create and Save a new Order
exports.create = (req,res) =>{
    if(!req.body){
        res.status(400).send({
            message:"content cannot be empty"
        });
    }
// Create a New Order
const order = new Order({
    category_id : req.body.category_id,
    description : req.body.description,
    status : req.body.status,
    user_id : req.body.user_id,
    product_id : req.body.product_id,
    invoice_id : req.body.invoice_id
})
// Save Category in the database

Order.create(order,(err,data)=>{
    if(err){
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving orders."
        })
    }else res.send(data);
});
}


// Retrieve all categories from the database.

exports.findAll = (req,res) => {
    Order.getAll((err,data)=>{
        if(err){
            res.status(500).send({message: err.message || "Some error occurred while retrieving orders."})
        }else res.send(data);
    });
};

// Update a category by id in the database

exports.update = (req,res)=>{
    if(!req.body){
        res.status(400).send({
            message :  "Content can not be empty!"
        })
    }
    Order.updateById(req.params.id,new Order(req.body),(err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    messsage: "order is not found with that id"+req.params.id
                })
            }else{
                res.status(500).send({
                    message: "Error while updating orderId"+req.params.id
                })
            }
        }else{
            res.status(200).send(data);
        }
    })
}

// delete the category by id from the database
exports.delete =(req,res)=>{
    Order.remove(req.params.id,(err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message: "order is not found with this id"+req.params.id
                })
            }else{
                res.status(500).send({
                    message : "Error while deleting the order with id"+req.params.id
                })
            }
           
        }else{
            res.status(200).send({message:"deleted successfully."})
        }
    })

}


