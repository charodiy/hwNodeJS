module.exports = {
    NOT_FOUND_DATA: {
        message: "Not all data is entered",
        code:404
    },
    BAD_REQUEST_USERNAME_EXISTS: {
        message: "Username already exists",
        code:400
    },
    BAD_REQUEST_EMAIL_EXISTS: {
        message: "User email already exists",
        code:400
    },
    BAD_REQUEST_WRONG_YEAR: {
        message: "Year cannot be less than zero or greater than today",
        code:400
    },
    BAD_REQUEST_WRONG_PRICE: {
        message: "Price cannot be less zero",
        code:400
    },
    BAD_REQUEST_WRONG_PASSWORD: {
        message: "Password cannot be less 8 characters",
        code:400
    }
}