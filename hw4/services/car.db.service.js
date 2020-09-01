const connection = require('../dataBase');

module.exports = {
  findAllCars: async () => {
      return connection.promise().query('SELECT * FROM cars');
  }
};