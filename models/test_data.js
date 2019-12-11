var mysql = require('mysql');
var pool =  mysql.createPool({
host : 'localhost',
user : 'root',
password: 'ss3c8z',
database: 'CycleRide'
});
 var insertRecord = 'INSERT INTO cr_users(name,mobile,password) VALUE(?,?,?)';
 var readTable = 'SELECT * FROM employee';
 var updateRecord = 'UPDATE employee SET salary = ?,name=? WHERE  id=?';
 var deleteRecord = 'DELETE FROM employee WHERE id=?';
 var login = 'SELECT * from cr_users where mobile=? and password=?';
 pool.getConnection(function(err, connection){   
  //Incsert a record.
  exports.insert = function (req,res) {
  var name= req.body.username;
  var mobile= req.body.mobile;
  var pwd= req.body.pwd;
  connection.query(insertRecord,[name,mobile,pwd], function(err,res1){
    if(err) throw err;
    else {
         res.send({'data':res1,'status':'success','msg':'Registred successfully'});
    }
  });
 };
  //Read table.
  exports.select = function (req,res) {
  var mobile= req.body.mobile;
  var pwd= req.body.pwd;
  connection.query(login,[mobile,pwd], function(err, rows){
    if(err) throw err;
    else {
       numRows = rows.length;
       if(numRows >0)
       {
                res.send({'data':rows,'status':'success','msg':'login successfull'});
       }
       else
       {
                res.send({'data':'','status':'fail','msg':'Invalid Credentials'});
       }
    }
  });
 };
 
 
  //Update a record.
  exports.update = function (req,res) {
  var id= req.body.id;
  var name= req.body.name;
  var sal= req.body.sal;
  connection.query(updateRecord,[60000,'Joe',id], function(err, res1){
    if(err) throw err;
    else {
        res.send('User updated successfully');
    }
  });
 };
 
 //Drop a table.
  exports.remove = function (req,res) {
  var id= req.body.id;
  connection.query(deleteRecord,[id], function(err, res1){
    if(err) throw err;
    else {
       res.send('User deleted successfully');
    }
  });
 }
  connection.release();//release the connection
});
