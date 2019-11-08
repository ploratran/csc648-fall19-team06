const express = require('express'); //express framework
const multer = require('multer');
const ejs = require('ejs');


var path = require('path');
var router = express.Router(); //router object via express

// Set The Storage Engine
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function(req, file, cb){
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Init Upload
const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000},
    fileFilter: function(req, file, cb){
        checkFileType(file, cb);
    }
}).single('myImage');

// Check File Type
function checkFileType(file, cb){
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if(mimetype && extname){
        return cb(null,true);
    } else {
        cb('Error: Images Only!');
    }
}

const app = express();



app.set('view engine', 'ejs');
app.use(express.static('./public'))
app.get('/', (req, res) => res.render('index'));
app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if(err){
            res.render('index', {
                msg: err
            });
        } else {
            if(req.file == undefined){
                res.render('index', {
                    msg: 'Error: No File Selected!'
                });
            } else {
                res.render('index', {
                    msg: 'File Uploaded!',
                    file: `uploads/${req.file.filename}`
                });
            }
        }
    });
});

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
