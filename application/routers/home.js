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
                    title: "Welcome to SFSU | View Products",
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
                    title: "Welcome to SFSU | View Products"
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
    about: (req, res) => {
        const path = require('path');
        const pages = path.join(__dirname, '../views/pages');
                res.render(pages + '/about');
    }
};
