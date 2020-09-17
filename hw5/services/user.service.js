const connection = require('../dataBase').getInstance();

module.exports = {

    getAllUsers: async () => {
        const User = connection.getModel('User');
        return User.findAll({});
    },

    createNewUser: async (userObject) => {
        const User = connection.getModel('User');
        return User.create(userObject, {new: true});
    },

    getUserById: async (userId) => {
        const User = connection.getModel('User');
        return User.findAll({
            where: {
                id: userId
            }
        })
    },

    getUserByUserName: async (userName) => {
        const User = connection.getModel('User');
        return User.findAll({
            where: {
                userName: userName
            }
        })
    },

    deleteUserById: async (userId) => {
        const User = connection.getModel('User');
        return User.destroy({
            where: {
                id: userId
            }
        })
    },

    updateUserById: async (userId, newUser) => {
        const User = connection.getModel('User');
        return User.update(newUser, {
            where: {
                id: userId
            }
        })
    },

};