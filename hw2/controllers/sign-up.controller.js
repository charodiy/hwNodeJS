const usersArray = require('../database/index');
const signUpService = require('../services/sign-up.service');

module.exports = {
    getSignUpPage: (req, res) => {
        res.render('sign-up/sign-up');
    },

    postUsersPage: (req, res) => {
        // usersArray.push(req.body);
        signUpService.pushNewUser(req.body);
        console.log(req.body, '-----sign-up');
        res.redirect('/users');
    }
};