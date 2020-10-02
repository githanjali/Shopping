const sql = require("./db.js");

// constructor

const Order = function(order){
    this.category_id = order.category_id,
    this.description = order.description,
    this.status = order.status,
    this.user_id = order.user_id,
    this.product_id = order.product_id,
    this.invoice_id = order.invoice_id
}

 // CREATE A NEW order

 Order.create = (newOrder,result) =>{
     sql.query("INSERT INTO order SET ?",newOrder,(err,res)=>{
         if(err){
            console.log("error: ", err);
            result(err, null);
             return;
         }
         console.log("created order: ", { id: res.insertId, ...newOrder });
         result(null, { id: res.insertId, ...newOrder })
     })
 }

 
  // GET ALL Orders

  Order.getAll = result => {
    sql.query("SELECT * FROM order", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("order: ", res);
      result(null, res);
    });
  }; 


  // UPDATE order BY ID 

  Order.updateById = (id,order,result) =>{
    sql.query(`UPDATE order SET category_id = ?,description=? , status=?,user_id=?,product_id=?,invoice_id=? WHERE id = ${id}`,
    [order.category_id,order.description,order.status,order.user_id,order.product_id,order.invoice_id],
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
  result(null,{id:id,...order});
    }
  );
  }


// DELETE order BY ID
Order.remove = (id,result)=>{
    sql.query(`DELETE FROM order WHERE id = ${id}`,(err,res)=>{
      if(err){
        console.log(err);
        result(null,err);
      }
      if(res.affectedRows == "0"){
        result({kind:"not_found"},null)
      }
      console.log("deleted order by id successfully");
      result(null,res);
    })
  }
  
    module.exports = Order;
