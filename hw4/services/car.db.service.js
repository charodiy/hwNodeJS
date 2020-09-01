const connection = require('../dataBase');

module.exports = {
    findAllCars: async () => {
        const [cars] = await connection.promise().query('SELECT * FROM cars');
        return cars;
    }
};