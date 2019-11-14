const express = require('express'); //express framework 
const path = require('path');
const mysql = require('mysql');
const bodyparser = require('body-parser');
const aboutRouter = require('./routers/about');
const homeRouter = require('./routers/home');
const sellRouter = require('./routers/sell');
const loginRouter = require('./routers/login');
const registerRouter = require('./routers/register');
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
app.use('/', sellRouter);
app.use('/', loginRouter);
app.use('/', registerRouter);

app.use(function(req,res) {
    res.status(400).render(path.join(__dirname, '/views/pages/404'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));

