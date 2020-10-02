const sql = require("./db.js");

// constructor

const Cart = function(cart){

    this.product_id = cart.product_id,
    this.user_id = cart.user_id,
    this.quantity = cart.quantity,
    this.amount = cart.amount
   
}

 // CREATE A NEW order

 Cart.create = (newCart,result) =>{
     sql.query("INSERT INTO cart SET ?",newCart,(err,res)=>{
         if(err){
            console.log("error: ", err);
            result(err, null);
             return;
         }
         console.log("created cart: ", { id: res.insertId, ...newCart });
         result(null, { id: res.insertId, ...newCart })
     })
 }

 
  // GET ALL Carts

  Cart.getAll = result => {
    sql.query("SELECT * FROM cart", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("cart: ", res);
      result(null, res);
    });
  }; 


  // UPDATE cart BY ID 
  
  Cart.updateById = (id,cart,result) =>{
    sql.query(`UPDATE cart SET product_id = ?,user_id=? , quantity=?,amount=? WHERE id = ${id}`,
    [cart.product_id,cart.user_id,cart.quantity,cart.amount],
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
  result(null,{id:id,...cart});
    }
  );
  }


// DELETE cart BY ID
Cart.remove = (id,result)=>{
    sql.query(`DELETE FROM cart WHERE id = ${id}`,(err,res)=>{
      if(err){
        console.log(err);
        result(null,err);
      }
      if(res.affectedRows == "0"){
        result({kind:"not_found"},null)
      }
      console.log("deleted cart by id successfully");
      result(null,res);
    })
  }
  
    module.exports = Cart;


