let carsArray = [
    {id: "1", producer: "honda", year: "2004", color: "black"},
    {id: "2", producer: "audi", year: "1999", color: "red"},
    {id: "3", producer: "tesla", year: "2015", color: "white"},
];

module.exports = carsArray;

// const mysql2 = require('mysql2');
//
// let connection = mysql2.createConnection({
//    user: "root",
//    host: "localhost",
//    password: "root",
//    database: "auto_shop"
// });
//
// module.exports = connection;

const Sequelize = require('sequelize');

module.exports = (() => {
    let instance;

    function initConnection() {
        const client = new Sequelize('auto_shop', 'root', 'root', {
            host: 'localhost',
            dialect: 'mysql'
        });
    }

    return {
        getInstance: () => {
            if (!instance) {
                instance = initConnection();
            }
            return instance;
        }
    }
})();