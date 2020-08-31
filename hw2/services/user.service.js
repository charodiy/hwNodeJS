const usersArray = require('../database');

module.exports = {
    selectAllFromUsers: () => {
        return usersArray;
    },

    addNewUser: (newUser) => {
        usersArray.push(newUser);
        return usersArray;
    }
}
;