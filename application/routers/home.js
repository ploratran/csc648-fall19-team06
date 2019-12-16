module.exports = {
    //Home page
    getHomePage: (req, res) => {
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
                res.render(pages + '/sell', {
                    title: "Welcome to SFSU | View Products"
                });
    },
    login: (req, res) => {
                res.render(pages + '/login', {
                    title: "Welcome to SFSU | View Products"
                });
    },
    register: (req, res) => {
                res.render(pages + '/register', {
                    title: "Welcome to SFSU | View Products"
                });
    },
    forgotPassword: (req, res) => {
                res.render(pages + '/forgot-password', {
                    title: "Welcome to SFSU | View Products"
                });
    },
    about: (req, res) => {
                res.render(pages + '/about');
    },
    listing: (req, res) => {
        res.render(pages + '/listing');
    },
    items: (req, res) => {
        res.render(pages+'/items');
    },
    searchCategory:(req, res)=>{
        var category = req.params.category;
        
        var query = "SELECT * FROM Products WHERE categoryName LIKE '%" + category+ "';"
        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render(pages + '/search2', {
                title: "Welcome to SFSU | View Products",
                products: result
            });
        });
    }
};
