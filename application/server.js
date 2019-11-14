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
const multer = require('multer');
const ejs = require('ejs');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// Set The Storage Engine
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function(req, file, cb){
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Init Upload
const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000},
    fileFilter: function(req, file, cb){
        checkFileType(file, cb);
    }
}).single('myImage');

// Check File Type
function checkFileType(file, cb){
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if(mimetype && extname){
        return cb(null,true);
    } else {
        cb('Error: Images Only!');
    }
}


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
 
app.use(express.static('public')); //serve public static files
app.get('/', (req, res) => res.render('pages/home'));
app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
    if(err){
        res.render('pages/home', {
            msg: err
        });
    } else {
        if(req.file == undefined){
            res.render('pages/home', {
                msg: 'Error: No File Selected!'
            });
        } else {
            res.render('pages/home', {
                msg: 'File Uploaded!',
                file: `uploads/${req.file.filename}`
            });
        }
    }
});
});
 
app.use('/', homeRouter);
app.use('/about', aboutRouter);
app.use('/inven', invenRouter);

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
 
app.listen(port, () => console.log('Listening on port 3000'));
// module.exports = router;


