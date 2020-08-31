const {Router} = require('express');
const apiRouter = Router();
const userRouter = require('../routes/user.router');
const signUpRouter = require('../routes/sign-up.router');

apiRouter.use('/users', userRouter);
apiRouter.use('/sign-up', signUpRouter);
// apiRouter.use('/schedulers', schRouter);

module.exports = apiRouter;