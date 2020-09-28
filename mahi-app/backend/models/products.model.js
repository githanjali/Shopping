const sql = require("./db.js");
// constructor
const Product = function(product) {
    this.name = product.name;
    this.category_id = product.category_id;
    this.user_id = product.user_id;
    this.description = product.description;
    this.image = product.image;
    this.title = product.title;
    this.quantity = product.quantity;
    this.price = product.price;
  };

 // CREATE A NEW PRODUCT

  Product.create = (newProduct, result) => {
    sql.query("INSERT INTO product SET ?", newProduct, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("created Product: ", { id: res.insertId, ...newProduct });
      result(null, { id: res.insertId, ...newProduct });
    });
  };

  // GET ALL PRODUCTS

  Product.getAll = result => {
    sql.query("SELECT * FROM product", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("Products: ", res);
      result(null, res);
    });
  }; 

  // UPDATE PRODUCT BY ID 
Product.updateById = (id,product,result) =>{
  sql.query(`UPDATE product SET name = ?,category_id=?,user_id=?,description=?,image=?,title=?,quantity=?,price=? WHERE id = ${id}`,
  [product.name,product.category_id,product.user_id,product.description,product.image,product.title,product.quantity,product.price],
  (err,res)=>{
if(err){
  console.log("error:"+err);
  result(null,err);
  return;
}
if(res.affectedRows  == "0"){
  result({kind:"not_find"},null);
  return;
}
result(null,{id:id,...product});
  }
);
}


// DELETE PRODUCT BY ID
Product.remove = (id,result)=>{
  sql.query(`DELETE FROM product WHERE id = ${id}`,(err,res)=>{
    if(err){
      console.log(err);
      result(null,err);
    }
    if(err.affectedrows == "0"){
      result({kind:"not_found"},null)
    }
    console.log("deleted product by id successfully");
    result(null,res);
  })
}

  module.exports = Product;
