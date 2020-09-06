const { Router } = require('express');
const registrationRouter = Router();
const controller = require('../controllers/registration.controller');


registrationRouter.get('/', controller.getRegistrationPage);

module.exports = registrationRouter;