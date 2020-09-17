const { Router } = require('express');
const userRouter = Router();

const controller = require('../controllers/user.controller');
const {userMiddleware} = require('../middlewares');

userRouter.get('/', controller.getUsers);
userRouter.get('/:id', controller.getUser);
userRouter.post('/', userMiddleware.checkUserValidity, controller.createUser);
userRouter.delete('/:id', controller.removeUser);
userRouter.post('/:id', userMiddleware.checkUserValidity, controller.updateUser);


module.exports = userRouter;