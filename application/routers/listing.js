const express = require('express');
const path = require('path');

const router = express.Router();

const pages = path.join(__dirname, '../views/pages/');
console.log(pages + 'listing');

router.get('/listing', (req, res) => {
    res.render(pages + 'listing'); //render listing.ejs
});

module.exports = router;