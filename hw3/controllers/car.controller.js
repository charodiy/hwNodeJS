const carService = require('../services/car.service');

module.exports = {
    getAllOfCars: (req, res) => {
        const carsArray = carService.selectAllFromCars();
        res.json(carsArray);
    },

    getCarById: (req, res) => {
        console.log(req.params);
        const car = carService.selectCarById(req.params.id);
        res.json(car);
    },

    removeCarById: (req, res) => {
        carService.deleteCarById(req.params.id);
        res.end('Car deleted');
    },

    updateCarById: (req, res) => {
        carService.updateCarById(req.params.id, req.body);
        res.end('Car updated');
    },

    createCar: (req, res) => {
        carService.createNewCar(req.body);
        res.end('Car created');
    }
};