const express = require('express');
const path = require('path');

const router = express.Router();

const pages = path.join(__dirname, '../views/pages/');

router.get('/forgot-password', (req, res) => {
    res.render(pages + 'forgot-password'); //render forgot-password.ejs
});

module.exports = router;