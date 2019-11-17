const express = require('express');
const path = require('path');
const db = require('../model/database');

const router = express.Router();

const pages = path.join(__dirname, '../views/pages');

// query:
// const sql = 'SELECT * FROM products';
//
// router.get('/', (req, res) => {
//     db.query(sql, (err, data) => {
//         if (err) {
//             console.log('err');
//             return;
//         }
//         res.render(pages + '/home', { listing: data });
//     });
// });
router.get('/', (req, res) => {
    res.render(pages + '/home'); //render home.ejs
});
router.get('/about', (req, res) => {
    res.render(pages + '/about'); //render about.ejs
});

module.exports = router;