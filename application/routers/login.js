//Poulomi Start code

module.exports = {
    getEmail: (req, res) => {
        const path = require('path');
        const pages = path.join(__dirname, '../views/pages');
        let query = "INSERT email INTO `Users`"; // query database to store username into db
        db.query(query,(err) => {
            if (err) {
                res.redirect('/login');
            }
            res.render(pages + '/login', {
                title: "Enter Email",
            });
        });
    },
    getPassword: (req, res) => {
        const path = require('path');
        const pages = path.join(__dirname, '../views/pages');
        let query = "INSERT password INTO `Users`"; // query database to store username into db
        db.query(query,(err) => {
            if (err) {
                res.redirect('/login');
            }
            res.render(pages + '/login', {
                title: "Enter Password",
            });
        });
    }

};
// Poulomi's end code