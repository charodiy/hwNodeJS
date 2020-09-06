const userService = require('../services/user.service');
const Joi = require('joi');
const newUserValidator = require('../validators/user.validator');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await userService.selectAllFromUsers();
            await res.render('users/users', {array: users})
        } catch (e) {
            res.json(e.message)
        }
    },

    addUser: async (req, res) => {
        try {
            const {error} = Joi.validate(req.body, newUserValidator);
            if(error) {
                return res.json(error.details[0].message)
            }

            await userService.addNewUserToDataBase(req.body);
            const users = await userService.selectAllFromUsers();
            res.render('users/users', {array: users});
        } catch (e) {
            res.json(e.message)
        }
    }
};