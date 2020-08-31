const usersArray = require('../database');

module.exports = {
    pushNewUser: (newUser) => {
        usersArray.push(newUser);
        // console.log(usersArray);
        return usersArray;
    }
};