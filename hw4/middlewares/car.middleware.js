module.exports = {
    checkCarValidity: (req, res, next) => {
        try {
            const car = req.body;

            if (!car.year || !car.model || !car.price) {
                throw new Error("Please input all data: year, model, price")
            }

            if (car.year.length !== 4 || car.year <= 0) {
                throw new Error("Wrong year");
            }

            if (car.price <= 0) {
                throw new Error("Wrong price");
            }

            next();
        } catch (e) {
            return res.status(400).end(e.message);
        }
    }
};