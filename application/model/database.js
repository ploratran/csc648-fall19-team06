const mysql = require('mysql');

// create db: 
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'testtest',
    database: 'test2'
});

module.exports = db;