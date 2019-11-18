module.exports = {
    //Home page
    getHomePage: (req, res) => {
        const path = require('path');
        const pages = path.join(__dirname, '../views/pages');
            let query = "SELECT * FROM `Category`"; // query database to get all the categories
            db.query(query, (err, result) => {
                if (err) {
                    res.redirect('/');
                }
                res.render(pages + '/home', {
                    title: "Welcome to SFSU | View Proucts",
                    categories: result
                });
                // console.log("Categories", result);
            });
    },
    sell: (req, res) => {
        const path = require('path');
        const pages = path.join(__dirname, '../views/pages');
                res.render(pages + '/sell', {
                    title: "Welcome to SFSU | View Proucts"
                });
    },
    login: (req, res) => {
        const path = require('path');
        const pages = path.join(__dirname, '../views/pages');
                res.render(pages + '/login', {
                    title: "Welcome to SFSU | View Proucts"
                });
    },
    register: (req, res) => {
        const path = require('path');
        const pages = path.join(__dirname, '../views/pages');
                res.render(pages + '/register', {
                    title: "Welcome to SFSU | View Proucts"
                });
    },
    forgotPassword: (req, res) => {
        const path = require('path');
        const pages = path.join(__dirname, '../views/pages');
                res.render(pages + '/forgot-password', {
                    title: "Welcome to SFSU | View Proucts"
                });
    },
    searchProducts: (req, res) => {
        searchString = req.body.search;
        categoryString = req.body.categoryName;
        console.log("--->",searchString, categoryString);
        // let query = "SELECT * FROM `Products` ORDER BY productId ASC"; // query database to get all the players

        if( searchString != undefined &&  categoryString != undefined ){
            var query = "SELECT * FROM Products WHERE title LIKE '%" +searchString+ "' AND categoryName LIKE '%" +categoryString+ "';"
        }else if(searchString == undefined){

            var query = "SELECT * FROM Products WHERE title LIKE '%" +searchString+ "';"

        }else if(categoryString == undefined){

            var query = "SELECT * FROM Products WHERE title LIKE '%" +searchString+ "';"
        }else{

            var query = "SELECT * FROM Products"
        }
        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('index.ejs', {
                title: "Welcome to SFSU | View Proucts",
                products: result
            });
        });
    },
};