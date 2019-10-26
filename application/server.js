const express = require('express'); //express framework 
const mysql = require('mysql');
const path = require('path');
const bodyparser = require('body-parser');
const aboutRouter = require('./routers/about');
const homeRouter = require('./routers/home');
const invenRouter = require('./routers/inven');
const port = 3000; //port #, can change if there is an issue persisting
var router = express.Router();
const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
 
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'inventory'
});
 
mysqlConnection.connect((err) => {
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
 
app.use(express.static('public')); //serve public static files
 
app.use('/', homeRouter);
app.use('/', aboutRouter);
app.use('/', invenRouter);

app.post('/search', function(req, res) { 
     var input = req.body.search;
     console.log(input);
    mysqlConnection.query('SELECT * FROM electronics WHERE inventory.electronics LIKE "%' + input + '%"',
    function(err, rows, fields){
      if(err) throw err;
          var data = [];
          for(i=0;i<rows.length;i++){
            data.push(rows[i].product);
          }
          res.end(JSON.stringify(data));
 });
});
 
//app.use(function(req,res) {
//    res.status(400).render(path.join(__dirname, '/views/pages/404'));
// });
 
app.listen(port, () => console.log('Listening on port 3000'));
// module.exports = router;


