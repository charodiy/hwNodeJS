const { Router } = require('express');
const carRouter = Router();
const controller = require('../controllers/car.controller');
const {carMiddleware} = require('../middlewares');

carRouter.get('/', controller.getCars);
carRouter.get('/:id', controller.getCar);
carRouter.post('/', carMiddleware.checkCarValidity, controller.createCar);
carRouter.delete('/:id', controller.removeCar);
carRouter.post('/:id', carMiddleware.checkCarValidity, controller.updateCar);

module.exports = carRouter;