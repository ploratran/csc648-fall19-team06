const express = require('express'); //express framework 
var path = require('path'); 
var router = express.Router(); //router object via express 
const app = express();
app.use(express.static(path.join(__dirname+'/public/css'))); //this is supposed to serve the css, but does not
router.get('/', function (req, res){
res.sendFile(path.join(__dirname+'/public/home.html')) //sends default home page
});
router.get('/about', function (req, res){
    res.sendFile(path.join(__dirname+'/public/about.html')) //routes to about.html page
});
router.get('/aboutTT', function (req, res){
        res.sendFile(path.join(__dirname+'/public/aboutTT.html')) //routes to aboutTT.html
});
const port = 3000; //port #, can change if there is an issue persisting
app.use('/', router);
app.listen(port, () => console.log('Listening on port 3000'));