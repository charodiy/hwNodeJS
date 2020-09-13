const { Router } = require('express');
const userRouter = Router();
const controller = require('../controllers/user.controller')

userRouter.get('/', controller.getUsers);
userRouter.get('/:id', controller.getUser);
userRouter.post('/', controller.createUser);
userRouter.delete('/:id', controller.removeUser);
userRouter.post('/:id', controller.updateUser);

module.exports = userRouter;