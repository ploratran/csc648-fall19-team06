
const express = require('express'); //express framework 
const fileUpload = require('express-fileupload'); //file upload
const path = require('path');
const mysql = require('mysql');
const bodyparser = require('body-parser');
// initialize app:
const app = express();
const db = require('./model/database');
const port = 3000; //port #, can change if there is an issue persisting
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

const {getHomePage, sell, login, register, about, accountHistory, listing, items, searchCategory} = require('./routers/home');
const {searchProducts, addProductPage, addProduct} = require('./routers/search');
const aboutRouter = require('./routers/about');
app.use('/', aboutRouter);

// set view engine as ejs:
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views')); //serve files in views folder

// all middlewares: 
app.use(bodyparser.json());
app.use(fileUpload()); // configure fileupload
app.use(express.static(__dirname + '/public')); //serve static files in public folder

app.get('/', getHomePage);
app.get('/sell', sell);
app.get('/login', login);
app.get('/register', register);
app.post('/searchProducts', searchProducts);
app.get('/searchCategory/:category', searchCategory);
app.get('/addProduct', addProductPage);
app.post('/addProduct', addProduct);
app.get('/about', about);
app.get('/listing', listing);
app.get('/history', accountHistory);
app.get('/items', items);

app.use((req,res) => {
    res.status(404).render(path.join(__dirname, '/views/pages/404'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));