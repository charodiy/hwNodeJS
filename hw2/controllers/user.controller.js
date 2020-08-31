const userService = require('../services/user.service');

module.exports = {
    getAllUsers: (req, res) => {
        console.log(req.body, '-----users');
        const usersArray = userService.selectAllFromUsers;
        res.render('users/users', {usersArray});
    },
};