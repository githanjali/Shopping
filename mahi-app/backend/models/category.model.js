const sql = require("./db.js");

// constructor

const Category = function(category){
    this.name = category.name,
    this.type = category.type
}

 // CREATE A NEW category

 Category.create = (newCategory,result) =>{
     sql.query("INSERT INTO category SET ?",newCategory,(err,res)=>{
         if(err){
            console.log("error: ", err);
            result(err, null);
             return;
         }
         console.log("created category: ", { id: res.insertId, ...newCategory });
         result(null, { id: res.insertId, ...newCategory })
     })
 }

 
  // GET ALL PRODUCTS

  Category.getAll = result => {
    sql.query("SELECT * FROM category", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("categories: ", res);
      result(null, res);
    });
  }; 


  // UPDATE category BY ID 

  Category.updateById = (id,category,result) =>{
    sql.query(`UPDATE category SET name = ?,type=? WHERE id = ${id}`,
    [category.name,category.type],
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
  result(null,{id:id,...category});
    }
  );
  }


// DELETE category BY ID
Category.remove = (id,result)=>{
    sql.query(`DELETE FROM category WHERE id = ${id}`,(err,res)=>{
      if(err){
        console.log(err);
        result(null,err);
      }
      if(res.affectedRows == "0"){
        result({kind:"not_found"},null)
      }
      console.log("deleted category by id successfully");
      result(null,res);
    })
  }
  
    module.exports = Category;


