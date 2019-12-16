const mysql = require('mysql');

// create db: 
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'sfsu'
});

module.exports = db;