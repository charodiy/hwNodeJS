module.exports = {
    checkCarValidity: (req, res, next) => {
        try {
            const car = req.body;

            if (!car.id || !car.year || !car.producer || !car.color) {
                throw new Error("Please input all data: id, year, producer, color")
            }

            if (car.id < 0) {
                throw new Error("It is impossible!")
            }

            if (car.year.length !== 4 || car.year <= 0) {
                throw new Error("Wrong year")
            }

            next();
        } catch (e) {
            return res.status(400).end(e.message);
        }
    }
};