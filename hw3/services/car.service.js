const carsArray = require('../database');

module.exports = {
    selectAllFromCars: () => {
        return carsArray;
    },

    selectCarById: (carId) => {
        return carsArray.find(car => car.id === carId);
    },

    deleteCarById: (carId) => {
        carsArray.map((car, carIndex) => {
            car.id === carId ? carsArray.splice(carIndex, 1) : carsArray;
        })
    },

    updateCarById: (carId, newParamsCar) => {
        carsArray.map(car => {
            if(car.id === carId){
                for (let key in car){
                    for (let newKey in newParamsCar){
                        car[key] = newParamsCar[key];
                    }
                }
            }
        });
    },

    createNewCar: (newCar) => {
        carsArray.push(newCar);
    }
};