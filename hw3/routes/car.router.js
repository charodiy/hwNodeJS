const { Router } = require('express');

const carRouter = Router();


const controller = require('../controllers/car.controller');

carRouter.get('/', controller.getAllOfCars);

carRouter.post('/', controller.createCar);

// carRouter.post('/', controller.getCarById);

module.exports = carRouter;