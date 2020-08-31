const { Router } = require('express');
const signUpRouter = Router();
const controller = require('../controllers/sign-up.controller');

signUpRouter.get('/', controller.getSignUpPage);
signUpRouter.post('/', controller.postUsersPage);

module.exports = signUpRouter;