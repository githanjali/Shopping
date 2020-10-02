const sql = require("./db.js");
// constructor
const User = function(user) {
    this.first_name = user.first_name;
    this.middle_name = user.middle_name;
    this.last_name = user.last_name;
    this.email = user.email;
    this.phone_number = user.phone_number;
    this.password = user.password;
    this.role = user.role;
  };

 // CREATE A NEW USER

 User.create = (newUser, result) => {
    sql.query("INSERT INTO user SET ?", newUser, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("created user: ", { id: res.insertId, ...newUser});
      result(null, { id: res.insertId, ...newUser });
    });
  };

  // GET ALL PRODUCTS

  User.getAll = result => {
    sql.query("SELECT * FROM user", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("users: ", res);
      result(null, res);
    });
  }; 

  // UPDATE PRODUCT BY ID 
  User.updateById= (id,user,result) =>{
  sql.query(`UPDATE user SET first_name =?,middle_name=?,last_name=?,email=?,phone_number=?,password=?,role=? WHERE id = ${id}`,
  [user.first_name,user.middle_name,user.last_name,user.email,user.phone_number,user.password,user.role],
  (err,res)=>{
if(err){
  console.log("error:"+err);
  result(null,err);
  return;
}
if(res.affectedRows == "0"){
    result({kind:"not_find"},null);
    return;
  }
  result(null,{id:id,...user});
    }
  );
  }


// DELETE PRODUCT BY ID
User.remove = (id,result)=>{
  sql.query(`DELETE FROM user where id = ${id}`,(err,res)=>{
    if(err){
      console.log(err);
      result(null,err);

    }
    if(res.affectedRows == "0"){
      result({kind:"not_found"},null)
    }
    console.log("deleted user by id successfully");
    result(null,res);
  })
}

  module.exports = User;
