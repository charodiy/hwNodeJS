let carsArray = [
    {id: "1", producer: "honda", year: "2004", color: "black"},
    {id: "2", producer: "audi", year: "1999", color: "red"},
    {id: "3", producer: "tesla", year: "2015", color: "white"},
];

module.exports = carsArray;

const mysql2 = require('mysql2');

let connection = mysql2.createConnection({
   user: "user",
   host: "localhost",
   password: "user",
   database: "auto_shop"
});

module.exports = connection;