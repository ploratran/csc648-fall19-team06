const express = require('express'); //express framework 
const fileUpload = require('express-fileupload'); //file upload
const path = require('path');
const mysql = require('mysql');
const bodyparser = require('body-parser');
// initialize app:
const app = express();
const db = require('./model/database');
const port = 3001; //port #, can change if there is an issue persisting

// connect to db:
db.connect((err) => {
    if (err) {
        console.log(err);
        console.log('Error connecting MySQL Database...');
        return;
    }
    console.log('MySQL Database Connected...');
})
global.db = db; //globally declares db

//Manish start
const {getHomePage, sell, login, register, forgotPassword,about} = require('./routers/home');
const {searchProducts, addProductPage, addProduct} = require('./routers/search');
// const {about, aboutTT} = require('./routers/about');
const aboutRouter = require('./routers/about');
app.use('/', aboutRouter);
//Manish end

// set view engine as ejs:
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views')); //serve files in views folder

// all middlewares: 
app.use(bodyparser.json());
app.use(fileUpload()); // configure fileupload
app.use(express.static('public')); //serve public static files


app.get('/', getHomePage);
app.get('/sell', sell);
app.get('/login', login);
app.get('/register', register);
app.get('/forgot-password', forgotPassword);
app.post('/searchProducts', searchProducts);
app.get('/addProduct', addProductPage);
app.post('/addProduct', addProduct);

app.get('/about', about);
// app.get('/aboutTT', aboutTT);


// app.use('/', homeRouter);
// app.use('/', aboutRouter);
// app.use('/', sellRouter);
// app.use('/', loginRouter);
// app.use('/', registerRouter);
// app.use('/', forgotRouter);

app.use(function(req,res) {
    res.status(400).render(path.join(__dirname, '/views/pages/404'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));