const Product = require("../models/products.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Product
  const product = new Product({
    name : req.body.name,
    category_id :  req.body.category_id,
    user_id :req.body.user_id,
    description : req.body.description,
    image : req.body.image,
    title : req.body.title,
    quantity : req.body.quantity,
    price : req.body.price
  });

  // Save Customer in the database
  Product.create(product, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Product."
      });
    else res.send(data);
  });
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  Product.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Products."
      });
    else res.send(data);
  });
};

// Update a product by id in the database
exports.update = (req,res) =>{
if(!req.body){
  res.status(400).send({
    message: "Content can not be empty!"
  }) 
}
Product.updateById(req.params.id,new Product(req.body),(err,data)=>{
  if(err){
    if(err.kind === "not_found"){
      res.status(404).send({
        message : `product is not found with that id ${req.params.id}`
      })
    }
    else{
      res.status(500).send({
        message: "Error while updating productId"+req.params.id
      })
    }
  }else{
    res.status(200).send(data);
  }

})
}

// delete the product by id from the database

exports.delete = (req,res)=> {
Product.remove(req.params.id,(err,data)=>{
  if(err){
    if(err.kind === "not_found"){
      res.status(404).send({
        message : "Product is not found with this id"+req.params.id
      })
      }else{
        res.status(500).send({
          message : "Error while deleting the product with id"+req.params.id
        })
      }
    }else{
      res.status(200).send({messaage :"Product is deleted successfully"});
    }
  })
}




