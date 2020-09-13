const {Router} = require('express');
const apiRouter = Router();
const carRouter = require('./car.router');

apiRouter.use('/cars', carRouter);

module.exports = apiRouter;