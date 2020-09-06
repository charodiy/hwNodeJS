const { Router } = require('express');
const userRouter = Router();
const controller = require('../controllers/user.controller');
const userMiddleware = require('../middlevares/user.middleware');

userRouter.get('/', controller.getAllUsers);
userRouter.post('/', controller.addUser);

module.exports = userRouter;