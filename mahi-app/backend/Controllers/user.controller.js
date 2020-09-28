const User = require("../models/user.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Product
  const user = new User({
    first_name : req.body.first_name,
    middle_name :  req.body.middle_name,
    last_name :req.body.last_name,
    email : req.body.email,
    phone_number : req.body.phone_number,
    password : req.body.password,
    role : req.body.role
  });

  // Save Customer in the database
  User.create(user, (err, data) => {
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
  User.getAll((err, data) => {
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
User.updateById(req.params.id,new User(req.body),(err,data)=>{
  if(err){
    if(err.kind === "not_found"){
      res.status(404).send({
        message : `user is not found with that id ${req.params.id}`
      })
    }
    else{
      res.status(500).send({
        message: "Error while updating userId"+req.params.id
      })
    }
  }else{
    res.status(200).send(data);
  }

})
}

// delete the product by id from the database

exports.delete = (req,res)=> {
User.remove(req.params.id,(err,data)=>{
  if(err){
    if(err.kind === "not_found"){
      res.status(404).send({
        message : "User is not found with this id"+req.params.id
      })
      }else{
        res.status(500).send({
          message : "Error while deleting the User with id"+req.params.id
        })
      }
    }else{
      res.status(200).send({messaage :"User is deleted successfully"});
    }
  })
}




