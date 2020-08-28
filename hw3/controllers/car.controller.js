const carService = require('../services/car.service');

module.exports = {
    getAllOfCars: (req, res) => {
        const carsArray = carService.selectAllFromCars();
        res.json(carsArray);
    },

    // getCarById: (req, res) => {
    //   const carById = carService.selectCarById(req.body.id);
    //   res.json(carById);
    // },

    createCar: (req, res) => {
        console.log(req.body, '---', req.body.id);
        carService.createNewCar(req.body);
        res.end('Car created');
    },
};