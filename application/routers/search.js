const express = require('express');
const path = require('path');
const db = require('../model/database');

const router = express.Router();

const pages = path.join(__dirname, '../views/pages');

router.get('/', (req, res) => {
    res.render(pages + '/home');
});

router.get('/search', (req, res) => {
    res.render(pages + '/search'); //render search.ejs
});

module.exports = router;