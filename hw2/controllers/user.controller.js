const userService = require('../services/user.service');

module.exports = {
    getAllUsers: (req, res) => {
        const usersArray = userService.selectAllFromUsers;
        res.render('users/users', {usersArray});
    },

    postUsers: (req, res) => {
        const usersArray = userService.addNewUser(req.body);
        res.render('users/users', {usersArray});
    }
};