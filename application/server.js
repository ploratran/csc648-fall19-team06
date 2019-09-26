const express = require('express'); //express framework 
var path = require('path');
var router = express.Router(); //router object via express 
const app = express();
app.use(express.static(path.join(__dirname+'/about'))); //serves about.css static
app.use("/about", express.static((__dirname+'/public'))); //this is supposed to serve the css, but does not
router.get('/', function (req, res){
res.sendFile(path.join(__dirname+'/public/home.html')) //sends default home page
});
router.get('/about', function (req, res){
    res.sendFile(path.join(__dirname+'/public/index.html')) //routes to about.html page
});
router.get('/aboutTT', function (req, res){
        res.sendFile(path.join(__dirname+'/about/thomas.html')) //routes to aboutTT.html
});
router.get('/aboutMP', function (req, res){
        res.sendFile(path.join(__dirname+'/about/manish.html')) //routes to aboutTT.html
});
router.get('/aboutPB', function (req, res){
    res.sendFile(path.join(__dirname+'/about/poulomi.html')) //routes to aboutTT.html
});
router.get('/aboutJH', function (req, res){
    res.sendFile(path.join(__dirname+'/about/jinan.html')) //routes to aboutTT.html
});
router.get('/aboutZW', function (req, res){
    res.sendFile(path.join(__dirname+'/about/zihao.html')) //routes to aboutTT.html
});
router.get('/aboutPT', function (req, res){
    res.sendFile(path.join(__dirname+'/about/tran.html')) //routes to aboutTT.html
});
const port = 3000; //port #, can change if there is an issue persisting
app.use('/', router);
app.listen(port, () => console.log('Listening on port 3000'));
