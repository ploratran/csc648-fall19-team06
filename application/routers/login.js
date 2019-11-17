const express = require('express');
const path = require('path');

const router = express.Router();

const pages = path.join(__dirname, '../views/pages/');

router.get('/login', (req, res) => {
    res.render(pages + 'login'); //render login.ejs
});

module.exports = router;