const express = require('express');
const path = require('path');

const router = express.Router(); //router object via express 

const aboutPage = path.join(__dirname, '../views/about/');

router.get('/aboutTT', function (req, res){
    console.log(aboutPage + 'aboutTT');
    res.sendFile(path.join(aboutPage + 'thomas.html')); //routes to aboutTT.html
});

router.get('/aboutMP', function (req, res){
    res.sendFile(path.join(aboutPage + 'manish.html')); //routes to aboutMP.html
});

router.get('/aboutPB', function (req, res){
    res.sendFile(path.join(aboutPage + 'poulomi.html')); //routes to aboutPB.html
});

router.get('/aboutJH', function (req, res){
    res.sendFile(path.join(aboutPage + 'jinan.html')); //routes to aboutJH.html
});

router.get('/aboutZW', function (req, res){
    res.sendFile(path.join(aboutPage + 'zihao.html')); //routes to aboutZW.html
});

router.get('/aboutPT', function (req, res){
    res.sendFile(path.join(aboutPage + 'tran.html')); //routes to aboutPT.html
});

module.exports = router; //export router module to server.js