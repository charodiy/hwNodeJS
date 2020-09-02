const carsService = require('../services/car.service');

module.exports = {
    fetchAllCars: async (req, res) => {
        try {
            const cars = await carsService.findAllCars();
            res.json(cars);
        } catch (e) {
            res.json(e.message);
        }
    },

    createCar: async (req, res) => {
        try {
            const car = await carsService.createNewCar(req.body);

            res.status(201).json(car);
        } catch (e) {
            res.json(e.message);
        }
    },

    removeCar: async (req, res) => {
        try {
            await carsService.deleteCarById(req.params.id);

            res.json('Car deleted');
        } catch (e) {
            res.json(e.message);
        }
    },

    updateCar: async (req, res) => {
        try {
            await carsService.updateCarById(req.params.id, req.body);

            res.json('Car updated');
        } catch (e) {
            res.json(e.message);
        }
    }
};