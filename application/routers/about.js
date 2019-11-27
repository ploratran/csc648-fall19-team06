const express = require('express');
const path = require('path');

const router = express.Router(); //router object via express 

const aboutPage = path.join(__dirname, '../views/about/');

router.get('/aboutTT', (req, res) => {
    res.sendFile(path.join(aboutPage + 'thomas.html')); //routes to aboutTT.html
});

router.get('/aboutMP', (req, res) => {
    res.sendFile(path.join(aboutPage + 'manish.html')); //routes to aboutMP.html
});

router.get('/aboutPB', (req, res) => {
    res.sendFile(path.join(aboutPage + 'poulomi.html')); //routes to aboutPB.html
});

router.get('/aboutJH', (req, res) => {
    res.sendFile(path.join(aboutPage + 'jinan.html')); //routes to aboutJH.html
});

router.get('/aboutZW', (req, res) => {
    res.sendFile(path.join(aboutPage + 'zihao.html')); //routes to aboutZW.html
});

router.get('/aboutPT', (req, res) => {
    res.sendFile(path.join(aboutPage + 'tran.html')); //routes to aboutPT.html
});

module.exports = router; //export router module to server.js

// module.exports = {

//     about: (req, res) => {
//         const path = require('path');
//         const pages = path.join(__dirname, '../views/pages');
//         res.render(pages + '/about');
//     },
//     aboutTT: (req, res) => {
//         const path = require('path');
//         const aboutPage = path.join(__dirname, '../views/about/');
//         res.sendFile(path.join(aboutPage + 'thomas.html')); //routes to aboutTT.html
//     },

// }