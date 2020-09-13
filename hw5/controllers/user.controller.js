const usersService = require('../services/user.service');

module.exports = {
    getUsers: async (req, res) => {
        try {
            const users = await usersService.getAllUsers();
            res.json(users);
        } catch (e) {
            res.json(e.message);
        }
    },

    createUser: async (req, res) => {
        try {
            const user = await usersService.createNewUser(req.body);
            res.status(201).json(user);
        } catch (e) {
            res.json(e.message);
        }
    },

    getUser: async (req, res) => {
        try {
            const user = await usersService.getUserById(req.params.id);
            res.json(user);
        } catch (e) {
            res.json(e.message);
        }
    },

    removeUser: async (req, res) => {
        try {
            await usersService.deleteUserById(req.params.id);
            res.json('User deleted');
        } catch (e) {
            res.json(e.message);
        }
    },

    updateUser: async (req, res) => {
        try {
            await usersService.updateUserById(req.params.id, req.body);
            res.json('User updated');
        } catch (e) {
            res.json(e.message);
        }
    }
}