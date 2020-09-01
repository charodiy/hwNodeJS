const { Router } = require('express');
const carsRouter = Router();
const controller = require('../controllers/car.db.controller');

carsRouter.get('/', controller.fetchAllCars);

module.exports = carsRouter;