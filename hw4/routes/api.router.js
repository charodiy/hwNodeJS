const {Router} = require('express');
const apiRouter = Router();
const carRouter = require('./car.router');
const carsRouter = require('./car.db.router');

apiRouter.use('/cars-old', carRouter);
apiRouter.use('/cars', carsRouter);

module.exports = apiRouter;