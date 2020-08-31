const { Router } = require('express');
const signUpRouter = Router();
const controller = require('../controllers/sign-up.controller');

signUpRouter.get('/', controller.getSignUpPage);

module.exports = signUpRouter;