const connection = require('../database').getInstance();

module.exports = {
    selectAllFromUsers: async () => {
        const User = connection.getModel('User')
        return User.findAll({});
    },

    addNewUserToDataBase: (newUser) => {
        const User = connection.getModel('User');
        return User.create(newUser, {new: true});
    }
};