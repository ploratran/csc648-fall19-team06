// //Poulomi Start code
//
module.exports = {
    getEmailPage: (req, res) => {
        res.render(pages + '/register', {
            title: "Add email",
            email: ''
        });
    },
    getEmail: (req, res) => {
        if (!req.toString()) {
            return res.status(400).send("No string is inputted.");
        }

        let username = req.body.username;
        let password = req.body.password;
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        let email = req.body.email;
        let rating = req.body.rating;
        let review = req.body.review;
        let type = req.body.type;
        let productId = req.body.productId;
        email = "firstName-"+ Date.now() + '.' + email;
        if (email.endsWith('@mail.sfsu.edu')) {
            // upload the file to the /public/assets/email directory
            email.mv(`public/assets/email/${firstName}`, (err) => {
                if (err) {
                    return res.status(500).send(err);
                }
                // send the player's details to the database
                var email = email;
                let query = "INSERT INTO `Users` (username, password, firstName, lastName, email, rating, review, `type`, productId) VALUES ('" +
                    userId + "', '" + username + "', '" + password + "', '" + firstName + "', '"  + lastName + "', '" + email + "', '"  + rating + "', '"  + review + "', '"  + type + "', '"  + productId +"')";
                db.query(query, (err) => {
                    if (err) {
                        return res.status(500).send(err, result);
                    }
                    res.redirect('/');
                });
            });
        } else {
            message = "Invalid Email format. Only SFSU email domains are allowed.";
            res.render(pages + '/register', {
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
                res.redirect('/addEmail');
                console.log("Into db");
            }
            res.render(pages + '/addEmail', {
                title: "Enter Password",
            });
        });
    }

};
// Poulomi's end code
