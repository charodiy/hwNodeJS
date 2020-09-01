const carsService = require('../services/car.db.service');

module.exports = {
  fetchAllCars: async (req, res) => {
      try {
          const cars = await carsService.findAllCars();
          res.json(cars);
      } catch (e) {
          res.json(e.message);
      }
  }
};