const {Router} = require('express');
const apiRouter = Router();
const userRouter = require('../routes/user.router');
const registrationRouter = require('../routes/registration.router');

apiRouter.use('/users', userRouter);
apiRouter.use('/registration', registrationRouter);
// apiRouter.use('/schedulers', schRouter);

module.exports = apiRouter;