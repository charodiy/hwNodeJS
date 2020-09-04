const connection = require('../dataBase').getInstance();

module.exports = {

    getAllCars: async () => {
        const Car = connection.getModel('Car');
        return Car.findAll({});
    },

    getCarById: async (carId) => {
        const Car = connection.getModel('Car');
        return Car.findAll({
            where: {
                id: carId
            }
        })
    },

    createNewCar: async (carObject) => {
        const Car = connection.getModel('Car');
        return Car.create(carObject, {new: true});
    },

    deleteCarById: async (carId) => {
        const Car = connection.getModel('Car');
        return Car.destroy({
            where: {
                id: carId
            }
        })
    },

    updateCarById: async (carId, newCar) => {
        const Car = connection.getModel('Car');
        return Car.update(newCar, {
            where: {
                id: carId
            }
        })
    },
};