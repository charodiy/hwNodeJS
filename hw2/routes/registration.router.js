const { Router } = require('express');
const registrationRouter = Router();
const controller = require('../controllers/registration.controller');
const userMiddleware = require('../middlevares/user.middleware');


registrationRouter.get('/', controller.getRegistrationPage);

module.exports = registrationRouter;