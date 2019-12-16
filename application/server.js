const express = require('express'); //express framework 
const fileUpload = require('express-fileupload'); //file upload
const path = require('path');
const mysql = require('mysql');
const bodyparser = require('body-parser');
// const bcrypt = require('bcrypt-nodejs');
// const LocalStrategy = require("passport-local").Strategy;
// const login = require('login');
// initialize app:
const app = express();
const db = require('./model/database');
const port = 3001; //port #, can change if there is an issue persisting
const pages = path.join(__dirname, '/views/pages');


// connect to db:
db.connect((err) => {
    if (err) {
        console.log('Error connecting MySQL Database...');
        return;
    }
    console.log('MySQL Database Connected...');
});

//Global declare variables
global.pages = pages;
global.db = db; //globally declares db

const {getHomePage, sell, login, register, about, listing, items, searchCategory} = require('./routers/home');
const {searchProducts, addProductPage, addProduct} = require('./routers/search');
const {getEmailPage, getEmail, getPassword} = require('./routers/register');
// const {getEmail, getPassword} = require('./routers/login');
// const {about, aboutTT} = require('./routers/about');
const aboutRouter = require('./routers/about');
app.use('/', aboutRouter);

// set view engine as ejs:
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views')); //serve files in views folder
// exports.register = function(req,res){
//     // console.log("req",req.body);
//     var today = new Date();
//     var users={
//         "first_name":req.body.first_name,
//         "last_name":req.body.last_name,
//         "email":req.body.email,
//         "password":req.body.password,
//         "created":today,
//         "modified":today
//     }
//     db.query('INSERT INTO Users SET ?',users, function (error, results, fields) {
//         if (error) {
//             console.log("error occurred",error);
//             res.send({
//                 "code":400,
//                 "failed":"error ocurred"
//             })
//         }else{
//             console.log('The solution is: ', results);
//             res.send({
//                 "code":200,
//                 "success":"user registered successfully"
//             });
//         }
//     });
// }
// all middlewares: 
app.use(bodyparser.json());
app.use(fileUpload()); // configure fileupload
app.use(express.static(__dirname + '/public')); //serve static files in public folder

// app.post('/login', function(req, res) {
//     var username = req.body.username;
//     var password = req.body.password;
//     if (username && password) {
//         db.query('SELECT * FROM Users WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
//             if (res.length > 0) {
//                 req.session.loggedin = true;
//                 req.session.username = username;
//                 res.redirect('/home');
//             } else {
//                 res.send('Incorrect Username and/or Password!');
//             }
//             res.end();
//         });
//     } else {
//         res.send('Please enter Username and Password!');
//         res.end();
//     }
// });

app.get('/', getHomePage);
app.get('/sell', sell);
app.get('/login', login);
app.get('/register', register, getPassword, getEmail);
app.get('/addEmail', getEmailPage)
app.post('/searchProducts', searchProducts);
app.get('/searchCategory/:category', searchCategory);
app.get('/addProduct', addProductPage);
app.post('/addProduct', addProduct);
app.get('/about', about);
app.get('/listing', listing);
app.get('/items', items);

app.use((req,res) => {
    res.status(404).render(path.join(__dirname, '/views/pages/404'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));