const usersArray = require('../database');

module.exports = {
    selectAllFromUsers: () => {
        // usersArray.push(newUser);
        // console.log(usersArray);
        return usersArray;
    }
};