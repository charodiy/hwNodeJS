const { Router } = require('express');
const signUpRouter = Router();
const controller = require('../controllers/sign-up.controller');
const userMiddleware = require('../middlevares/user.middleware');


signUpRouter.get('/', controller.getSignUpPage);

module.exports = signUpRouter;