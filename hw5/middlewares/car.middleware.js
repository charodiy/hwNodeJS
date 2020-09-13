const {ErrorHandler, errors, statusCodesEnum} = require('../error');

module.exports = {
    checkCarValidity: (req, res, next) => {
        try {
            const car = req.body;

            if (!car.year || !car.model || !car.price) {
                return next(new ErrorHandler(
                    errors.BAD_REQUEST_NOT_VALID_USER_DATA.message,
                    errors.BAD_REQUEST_NOT_VALID_USER_DATA.code,
                    statusCodesEnum.BAD_REQUEST
                ))
            }

            if (car.year >= new Date().getFullYear() || car.year <= 0) {
                return next(new ErrorHandler(
                    errors.BAD_REQUEST_WRONG_YEAR.message,
                    errors.BAD_REQUEST_WRONG_YEAR.code,
                    statusCodesEnum.BAD_REQUEST
                ));
            }

            if (car.price <= 0) {
                return next(new ErrorHandler(
                    errors.BAD_REQUEST_WRONG_PRICE.message,
                    errors.BAD_REQUEST_WRONG_PRICE.code,
                    statusCodesEnum.BAD_REQUEST
                ));
            }

        } catch (e) {
            return next(e);
        }
    }
};