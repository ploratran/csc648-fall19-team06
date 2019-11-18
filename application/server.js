const express = require('express'); //express framework 
const path = require('path');
const mysql = require('mysql');
const bodyparser = require('body-parser');
const db = require('./model/database');
const port = 3000; //port #, can change if there is an issue persisting

// connect to db:
db.connect((err) => {
    if (err) {
        console.log('Error connecting MySQL Database...');
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
app.use(express.static('public')); //serve public static files

app.use('/', homeRouter);
app.use('/', aboutRouter);
app.use('/', sellRouter);
app.use('/', loginRouter);
app.use('/', registerRouter);
app.use('/', forgotRouter);

app.use(function(req,res) {
    res.status(400).render(path.join(__dirname, '/views/pages/404'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));