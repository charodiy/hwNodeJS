const carsService = require('../services/car.service');

module.exports = {
    getCars: async (req, res) => {
        try {
            const cars = await carsService.getAllCars();
            res.json(cars);
        } catch (e) {
            return res.status(400).end(e.message);
        }
    },

    getCar: async (req, res) => {
        try {
            const car = await carsService.getCarById(req.params.id);
            res.json(car);
        } catch (e) {
            return res.status(400).end(e.message);
        }
    },

    createCar: async (req, res) => {
        try {
            const car = await carsService.createNewCar(req.body);

            res.json(car);
        } catch (e) {
            return res.status(400).end(e.message);
        }
    },

    removeCar: async (req, res) => {
        try {
            await carsService.deleteCarById(req.params.id);
            res.json('Car deleted');
        } catch (e) {
            return res.status(400).end(e.message);
        }
    },

    updateCar: async (req, res) => {
        try {
            await carsService.updateCarById(req.params.id, req.body);
            res.json('Car updated');
        } catch (e) {
            return res.status(400).end(e.message);
        }
    }
};