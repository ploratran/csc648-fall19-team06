//Poulomi Start code

module.exports = {
    // getEmailPage: (req, res) => {
    //     res.render(pages + '/addProduct', {
    //         title: "Add product for sell",
    //         email: ''
    //     });
    // },
    getEmail: (req, res) => {
        if (!req.toString()) {
            return res.status(400).send("No string is inputted.");
        }

        let userId = req.body.userID;
        let username = req.body.username;
        let password = req.body.password;
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        let email = ' ';
        let rating = req.body.rating;
        let review = req.body.review;
        let type = req.body.type;
        let productId = req.body.productId

        if (username.mimetype === '@mail.sfsu.edu') {
            // upload the file to the /public/assets/img directory
            username.mv(`public/assets/email/${username}`, (err ) => {
                if (err) {
                    return res.status(500).send(err);
                }
                // send the player's details to the database
                var username  = username;
                let query = "INSERT INTO `Users` (userId, username, password, firstName, lastName, email, rating, review, type, productId) VALUES ('" +
                    userId + "', '" + username + "', '" + password + "', '" + firstName + "', '"  + lastName + "', '" + email + "', '"  + rating + "', '"  + review + "', '"  + type + "', '"  + productId +"')";
                db.query(query, (err, result) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    res.redirect('/');
                });
            });
        } else {
            message = "Invalid Email format. Only SFSU email domains are allowed.";
            res.render(pages + '/addEmail', {
                message,
                title: "Add a new Email"
            });
        }

    },
    getPassword: (req, res) => {
        const path = require('path');
        const pages = path.join(__dirname, '../views/pages');
        let query = "INSERT INTO `Users`"; // query database to store username into db
        console.log("Into db");
        db.query(query,(err) => {
            if (err) {
                res.redirect('/login');
                console.log("Into db");
            }
            res.render(pages + '/login', {
                title: "Enter Password",
            });
        });
    }

};
// Poulomi's end code