const mysql = require('mysql');

// create db connection 
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'testtest',
    database: 'testdb'
});

module.exports = db;