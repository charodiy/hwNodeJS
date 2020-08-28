let array = [
    {id: "1", producer: "honda", year: "2004", color: "black"},
    {id: "2", producer: "audi", year: "1999", color: "red"},
    {id: "3", producer: "tesla", year: "2015", color: "white"},
];

module.exports = {
    selectAllFromCars: () => {
        return array;
    },

    // selectCarById: (carId) => {
    //     const car = array.find(carId);
    //     console.log(car);
    // },

    createNewCar: (carObject) => {
        array.push(carObject);
    }
};