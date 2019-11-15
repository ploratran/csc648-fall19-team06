const express = require('express');
const path = require('path');
const db = require('../model/database');

const router = express.Router();

const pages = path.join(__dirname, '../views/pages');

router.get('/', (req, res) => {
    db.query('SELECT * FROM products', (err, data) => {
        if (err) {
            console.log('err');
            return;
        } 
        res.render(pages + '/home', { listing: data });
    })
    // res.render(pages + '/home', { data: 'test' }); //render home.ejs + sends default home page
});

router.get('/about', (req, res) => {
    res.render(pages + '/about'); //render about.ejs
});

module.exports = router;