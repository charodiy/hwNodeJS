const Joi = require('joi');

module.exports = Joi.object().keys({
    userName: Joi.string().trim().min(2).required(),
    password: Joi.string().trim().min(5).required(),
    email: Joi.string().email().required(),
    // age: Joi.number().integer().min(0).max(100).optional()
});