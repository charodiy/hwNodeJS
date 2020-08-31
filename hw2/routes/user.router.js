const { Router } = require('express');
const userRouter = Router();
const controller = require('../controllers/user.controller');
// const {carMiddleware} = require('../middlewares');

userRouter.get('/', controller.getAllUsers);

// carRouter.post('/:id', carMiddleware.checkCarValidity, controller.updateCarById);


module.exports = userRouter;