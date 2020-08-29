const { Router } = require('express');
const carRouter = Router();
const controller = require('../controllers/car.controller');
const {carMiddleware} = require('../middlewares');

carRouter.get('/', controller.getAllOfCars);

carRouter.get('/:id', controller.getCarById);

carRouter.delete('/:id', controller.removeCarById);

carRouter.post('/:id', carMiddleware.checkCarValidity, controller.updateCarById);

carRouter.post('/', carMiddleware.checkCarValidity, controller.createCar);


module.exports = carRouter;