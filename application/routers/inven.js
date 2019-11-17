// //this is a test build page
// const express = require('express');
// const path = require('path');
// const mysql = require('mysql');
// const bodyparser = require('body-parser');
// const app = express();
// const router = express.Router();
// const pages = path.join(__dirname, '../views/pages')
// const mysqlConnection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'inventory'
// });
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({ extended: false }));
// // router.get('/inven',(req, res)=>{
// //     mysqlConnection.query("SELECT name FROM inventory.electronics",(err, rows, fields)=>{
// //         if(!err){
// //         res.send(rows);
// //         console.log("Data taken from SQL: " + JSON.stringify(rows));
// //         }
// //         else
// //         console.log("This is the error", err);
// //     })
// //  });
// var menu = {};
// mysqlConnection.query("SELECT column_name FROM information_schema.columns WHERE table_name = 'electronics' and table_schema = 'inventory'",(err, rows, fields)=>{
//     if(!err){
//     console.log("Data taken from SQL: " + JSON.stringify(rows));
//
//     menu = rows;
//     console.log(menu);
// }
// else
// console.log("This is the error", err);
// });
// //  router.get('/search', function(req, res){ //GET method to access DB and return results in JSON
// //     // res.render(pages + '/home', {dropDownVals: menu})
// //     // console.log(req.body);
// //     mysqlConnection.query('SELECT * FROM inventory.electronics WHERE product LIKE "%' + req.body + '%"',
// //     function(err, rows, fields){
// //       if(err) throw err;
// //       var data = [];
// //       for(i=0;i<rows.length;i++){
// //         data.push(rows[i].product);
// //       }
// //       res.end(JSON.stringify(data));
// //     });
// //   });
//
// //   app.post('/search', function(req, res){ //POST method to access DB and return results in JSON
// //     mysqlConnection.query('SELECT * FROM products WHERE product LIKE "%' + req.body + '%"',
// //     function(err, rows, fields){
// //       if(err) throw err;
// //       var data = [];
// //       for(i=0;i<rows.length;i++){
// //         data.push(rows[i].product);
// //       }
// //       res.end(JSON.stringify(data));
// //       console.log(req.params.input);
// //     });
// //     res.render(pages + '/home', {})
// //   });
//
//
//
//
//
//
//
// module.exports = router;
//
//
