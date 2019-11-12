const express = require('express'); //express framework 
<<<<<<< HEAD
var path = require('path');
var router = express.Router(); //router object via express 
const app = express();
app.use(express.static(path.join(__dirname+'/about'))); //serves about.css static
app.use("/about", express.static((__dirname+'/public'))); //this is supposed to serve the css, but does not
router.get('/', function (req, res){
res.sendFile(path.join(__dirname+'/public/home.html')) //sends default home page
});
router.get('/about', function (req, res){
    res.sendFile(path.join(__dirname+'/public/index.html')) //routes to about.html page
});
router.get('/aboutTT', function (req, res){
        res.sendFile(path.join(__dirname+'/about/thomas.html')) //routes to aboutTT.html
});
router.get('/aboutMP', function (req, res){
        res.sendFile(path.join(__dirname+'/about/manish.html')) //routes to aboutTT.html
});
router.get('/aboutPB', function (req, res){
    res.sendFile(path.join(__dirname+'/about/poulomi.html')) //routes to aboutTT.html
});
router.get('/aboutJH', function (req, res){
    res.sendFile(path.join(__dirname+'/about/jinan.html')) //routes to aboutTT.html
});
router.get('/aboutZW', function (req, res){
    res.sendFile(path.join(__dirname+'/about/zihao.html')) //routes to aboutTT.html
});
router.get('/aboutPT', function (req, res){
    res.sendFile(path.join(__dirname+'/about/tran.html')) //routes to aboutTT.html
});
const port = 3000; //port #, can change if there is an issue persisting
app.use('/', router);
=======
const path = require('path');
const mysql = require('mysql');
const bodyparser = require('body-parser');
const aboutRouter = require('./routers/about');
const homeRouter = require('./routers/home');
const port = 3000; //port #, can change if there is an issue persisting

const app = express();
app.use(bodyparser.json());

// const mysqlConnection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'testtest',
//     database: 'testdb'
// });

// mysqlConnection.connect((err) => {
//     if (!err) {
//         console.log('Database successfully connected');
//     } else {
//         console.log('Error connecting: ' + JSON.stringify(err, undefined, 2));
//     }
// });

app.set('view engine', 'ejs'); //set view engine as ejs
app.set('views', path.join(__dirname, 'views')); //serve files in views folder

app.use(express.static('public')); //serve public static files

app.use('/', homeRouter);
app.use('/', aboutRouter);

app.use(function(req,res) {
    res.status(400).render(path.join(__dirname, '/views/pages/404'));
});

>>>>>>> 3c8b146bdbebb751f8be78c8fe2ea4ba59383809
app.listen(port, () => console.log('Listening on port 3000'));
