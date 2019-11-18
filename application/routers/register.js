const express = require('express');
const path = require('path');

const router = express.Router();

const pages = path.join(__dirname, '../views/pages/');

router.get('/register', (req, res) => {
    res.render(pages + 'register'); //render login.ejs
});

module.exports = router;