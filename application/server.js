const express = require('express'); //express framework 
<<<<<<< HEAD
const path = require('path');
=======
>>>>>>> 5746a4b4f1a1dc18c45cb9c3a6dd3553cd8fe395
const mysql = require('mysql');
const path = require('path');
const bodyparser = require('body-parser');
<<<<<<< HEAD
const db = require('./model/database');
const port = 3001; //port #, can change if there is an issue persisting

// connect to db:
db.connect((err) => {
    if (err) {
        console.log('Error connecting ...');
        return;
    }
    console.log('MySQL Database Connected...');
})

// initialize app:
const app = express();

// define all routes: 
const aboutRouter = require('./routers/about');
const homeRouter = require('./routers/home');
const sellRouter = require('./routers/sell');
const loginRouter = require('./routers/login');
const registerRouter = require('./routers/register');
const forgotRouter = require('./routers/forgot-password');

// set view engine as ejs:
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views')); //serve files in views folder

// all middlewares: 
app.use(bodyparser.json());
=======
const aboutRouter = require('./routers/about');
const homeRouter = require('./routers/home');
const invenRouter = require('./routers/inven');
const port = 3000; //port #, can change if there is an issue persisting
var router = express.Router();
const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


const mysqlConnection = mysql.createConnection({ //mysql connection information
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'sfsuweb'
});
 
mysqlConnection.connect((err) => { //creates connection
    if (!err) {
        console.log('Database successfully connected');
    } else {
        console.log('Error connecting: ' + JSON.stringify(err, undefined, 2));
    }
});
 
// app.get('/inven',(req, res)=>{
//     mysqlConnection.query("SELECT * FROM inventory.electronics",(err, rows, fields)=>{
//         if(!err){
//         res.send(rows);
//         console.log("Data taken from SQL: " + JSON.stringify(rows));
//         }
//         else
//         console.log("This is the error", err);
//     })
//  });
// router.get('/', function(req, res){
//     mysqlConnection('SELECT * FROM inventory.Furniture', function(err, result){
//         if(!err){
//             res.render('page', {
//                 clients: result
//             });
//         }
//         else console.log('Error while performing query');
//     })
// })
// router.get('/', function(req, res, next) {
//     mysql.connect(mysqlConnection).then(() => {
//         return sql.query`select * from inventory`;
//     }).then(result => {
//         console.log(result)
//         // Pass the DB result to the template
//         res.render('views/pages/home', {menu: result})
//     }).catch(err => {
//         console.log(err)
//     })
// });
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs'); //set view engine as ejs
app.set('views', path.join(__dirname, 'views')); //serve files in views folder
 
>>>>>>> 5746a4b4f1a1dc18c45cb9c3a6dd3553cd8fe395
app.use(express.static('public')); //serve public static files
 
app.use('/', homeRouter);
app.use('/', aboutRouter);
<<<<<<< HEAD
app.use('/', sellRouter);
app.use('/', loginRouter);
app.use('/', registerRouter);
app.use('/', forgotRouter);
=======
app.use('/', invenRouter);
>>>>>>> 5746a4b4f1a1dc18c45cb9c3a6dd3553cd8fe395

app.post('/search', function(req, res) { //function for searching through the database
     var input = req.body.search; //stores user input
     var input2 = req.body.category;
     console.log(input2);
     console.log("user is searching for " + input);
    mysqlConnection.query('SELECT * FROM Products WHERE type LIKE "%' + input + '%"', //%like query
    function(err, rows, fields){
      if(err) throw err;
          var data = [];
          for(i=0;i<rows.length;i++){ //pushes results
            // data.push(rows[i].name); 
            // data.push(rows[i].description);
            data.push(rows[i]);
          } 
          res.end(JSON.stringify(data));
 });
});
 
// app.post('/search/tv', function(req, res) { //function for searching through the database
//    var input = req.body.search; //stores user input
//    console.log("user is searching for " + input);
//   mysqlConnection.query('SELECT name FROM inventory.electronics WHERE name LIKE "%' + input + '%"', //%like query
//   function(err, rows, fields){
//     if(err) throw err;
//         var data = [];
//         for(i=0;i<rows.length;i++){ //pushes results
//           data.push(rows[i].name); 
//           data.push(rows[i].description);
//         } 
//         res.end(JSON.stringify(data));
// });
// });
app.use(function(req,res) {
   res.status(400).render(path.join(__dirname, '/views/pages/404'));
});
<<<<<<< HEAD

app.listen(port, () => console.log(`Listening on port ${port}`));
=======
 
app.listen(port, () => console.log('Listening on port 3000'));
// module.exports = router;


>>>>>>> 5746a4b4f1a1dc18c45cb9c3a6dd3553cd8fe395
