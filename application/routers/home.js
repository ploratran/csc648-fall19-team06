const express = require('express');
const path = require('path');
<<<<<<< HEAD
const db = require('../model/database');

=======
const mysql = require('mysql');
const bodyparser = require('body-parser');
const app = express();
>>>>>>> 5746a4b4f1a1dc18c45cb9c3a6dd3553cd8fe395
const router = express.Router();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'sfsuweb'
});
var menu = {};
var row = [];
//mysqlConnection.query("SELECT appliances FROM inventory.category",(err, rows, fields)=>{
    //mysqlConnection.query("SELECT column_name FROM information_schema.columns WHERE table_name = 'electronics' and table_schema = 'inventory'",(err, rows, fields)=>{
mysqlConnection.query("SELECT name FROM sfsuweb.Category",(err, rows, fields)=> {
    if(!err){
    console.log("Data taken from SQL: " + JSON.stringify(rows));
    for (var i = 0; i < rows.length; i++) {
       row = rows[i];
      console.log(row.category);
  }
    menu = rows;
    console.log(menu);
    
    }
    else
    console.log("This is the error", err);
})

const pages = path.join(__dirname, '../views/pages');

<<<<<<< HEAD
// query:
const sql = 'SELECT * FROM products';

router.get('/', (req, res) => {
    db.query(sql, (err, data) => {
        if (err) {
            console.log('err');
            return;
        } 
        res.render(pages + '/home', { listing: data });
    });
});

router.get('/about', (req, res) => {
=======
router.get('/', function(req, res, next) {
    res.render(pages + '/home', {dropDownVals: menu}) //displays column names
});

// app.get('/search', function(req, res){ //GET method to access DB and return results in JSON
//     var inp = req.body();
//     mysqlConnection.query('SELECT * FROM products WHERE product LIKE "%' + inp + '%"',
//     function(err, rows, fields){
//       if(err) throw err;
//       var data = [];
//       for(i=0;i<rows.length;i++){
//         data.push(rows[i].product);
//       }
//       res.end(JSON.stringify(data));
//     });
//   });
    
  
  // app.post('/search', function(req, res) { 
  //   console.log(req.body.search);
  // })

 
  // app.post('/search', function(req, res){ //POST method to access DB and return results in JSON
  //   var input = req.body();
  //   mysqlConnection.query('SELECT * FROM electronics WHERE inventory.electronics LIKE "%' + input + '%"',
  //   function(err, rows, fields){
  //     if(err) throw err;
  //     var data = [];
  //     for(i=0;i<rows.length;i++){
  //       data.push(rows[i].product);
  //     }
  //     res.end(JSON.stringify(data));
  //     console.log(req.params.input);
  //   });
  // });

router.get('/about', function(req, res) {
>>>>>>> 5746a4b4f1a1dc18c45cb9c3a6dd3553cd8fe395
    res.render(pages + '/about'); //render about.ejs
});


module.exports = router;