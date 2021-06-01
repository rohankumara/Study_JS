var mysql = require('mysql');
var con = mysql.createConnection({
    host:"local",
    user:"rohan",
    password:"Rohan1998"
})

con.connect(function(err){
    if(err) throw err;
    console.log("Node conected")
})