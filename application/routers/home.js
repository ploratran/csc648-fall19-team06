module.exports = {
    //Home page
    getHomePage: (req, res) => {
            let query = "SELECT * FROM `Category`"; // query database to get all the categories
            let loggedUsername = '';
            if(req.session.user.username){
                let loggedUsername = req.session.user.firstName;
            }
            db.query(query, (err, result) => {
                if (err) {
                    res.redirect('/');
                }
                res.render(pages + '/home', {
                    title: "Welcome to SFSU | View Proucts",
                    categories: result,
                    loggedUsername: loggedUsername
                });
                // console.log("Categories", result);
            });
    },
    sell: (req, res) => {
                res.render(pages + '/sell', {
                    title: "Welcome to SFSU | View Proucts"
                });
    },
    login: (req, res) => {
        let message = '';
                res.render(pages + '/login', {
                    message
                });
    },
    loginUser: (req, res) => {
        let message = '';
        let username = req.body.username;
        let password = req.body.password;
        // find user from databse
        let query = `SELECT * FROM Users WHERE username = ?`;

        db.query(query, username, function(err, result) {
           if(err) throw err
           if(result.length) {
            //compare the passwords
            result = result[0];
            if(bcrypt.compareSync(password, result.password)) {
                // return the data
                var userDetails = {};
                userDetails.userId = result.userId;
                userDetails.username = result.username;
                userDetails.firstName = result.firstName;
                req.session.user = userDetails;
                res.redirect('/');
            } else{
                message = "Incorrect Password";
                res.render(pages + '/login', {
                message
                });
            }
           }else {
            message = "User not found";
            res.render(pages + '/login', {
                message
            });
           }
        });      
    },
    register: (req, res) => {
                res.render(pages + '/register', {
                    title: "Welcome to SFSU | View Proucts",
                    message: ''
                });
    },
    registerUser: (req, res) => {
        usernameLength = req.body.username.length;
        sfsuEmail = req.body.username.substr(usernameLength - 13,usernameLength);
        
        let message = '';
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        let username = req.body.username;
        let password = req.body.password;
        let confirmPassword = req.body.confirmPassword;
        let validUsername = true;
        let validPassword = true;
        if(password == confirmPassword){
            console.log("Voila Password Match")
        }else{ 
            validPassword = false;
            message = "Password and Confirm Password doesn't match";
            res.render(pages + '/register', {
                message
            });
        }
        if(sfsuEmail == 'mail.sfsu.edu'){
            console.log("valid sfsu user");
        }else{
            console.log("not a valid sfsu user", sfsuEmail);
            validUsername = false;
            message = "Please enter a valid SFSU email";
            res.render(pages + '/register', {
                message
            });
        }
        if(validPassword && validUsername){
            var pwd = password;
            // Hash the password before insert it into the database.
            password = bcrypt.hashSync(pwd,10);
            let query = "INSERT INTO Users (username,password,firstName,lastName) VALUES ('" + username + "', '" + password + "', '" + firstName + "', '" + lastName +  "')";
                    db.query(query, (err, result) => {
                        if (err) {
                            return res.status(500).send(err);
                        }
                        res.redirect('/');
            });
        }        
    },
    forgotPassword: (req, res) => {
                res.render(pages + '/forgot-password', {
                    title: "Welcome to SFSU | View Proucts"
                });
    },
    about: (req, res) => {
                res.render(pages + '/about');
    },
    listing: (req, res) => {
        res.render(pages + '/listing');
    },
    accountHistory: (req, res) => {
        res.render(pages + '/accountHistory');
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
                title: "Welcome to SFSU | View Proucts",
                products: result
            });
        });
    }
};
