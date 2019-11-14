const express = require('express');
const path = require('path');

const router = express.Router();

const pages = path.join(__dirname, '../views/pages');

router.get('/', function(req, res) {
    res.render(pages + '/home'); //render home.ejs + sends default home page
});

router.get('/about', function(req, res) {
    res.render(pages + '/about'); //render about.ejs
});

module.exports = router;