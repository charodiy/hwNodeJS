const {Router} = require('express');
const apiRouter = Router();
const carsRouter = require('./car.router');

apiRouter.use('/cars', carsRouter);

module.exports = apiRouter;