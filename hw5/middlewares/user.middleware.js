const {ErrorHandler, errors, statusCodesEnum} = require('../error');
const userService = require('../services/user.service');

module.exports = {
    checkUserValidity: async (req, res, next) => {
        try {
            const user = req.body;
            const userByUserName = await userService.getUserByUserName(user.userName);

            if (!user.userName || !user.name || !user.password) {
                return next(new ErrorHandler(
                    errors.NOT_FOUND_DATA.message,
                    errors.NOT_FOUND_DATA.code,
                    statusCodesEnum.NOT_FOUND
                ))
            }

            if (user.userName === userByUserName[0].userName) {
             return next(new ErrorHandler(
                 errors.BAD_REQUEST_USERNAME_EXISTS.message,
                 errors.BAD_REQUEST_USERNAME_EXISTS.code,
                 statusCodesEnum.BAD_REQUEST
             ))
            }

            if(user.password < 8) {
                return next( new ErrorHandler(
                    errors.BAD_REQUEST_WRONG_PASSWORD.message,
                    errors.BAD_REQUEST_WRONG_PASSWORD.code,
                    statusCodesEnum.BAD_REQUEST
                ))
            }

                next();
        } catch (e) {
            next(e)
        }
    }
};