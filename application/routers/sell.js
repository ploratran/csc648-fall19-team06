const express = require('express');
const path = require('path');

const router = express.Router();

const pages = path.join(__dirname, '../views/pages/');

router.get('/sell', (req, res) => {
    res.render(pages + 'sell'); //render sell.ejs
});

module.exports = router;