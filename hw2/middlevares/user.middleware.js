const usersArray = require('../database');

module.exports = {
    checkUserAtRegistration: (req, res, next) => {
        try {
            const newUser = req.body;

            if (!newUser.username || !newUser.password) {
                throw new Error("Please input all data")
            }

            if(newUser.password.length > 4) {
                throw new Error("Password must be at least 4 characters.")
            }

            usersArray.map(user => {
               if(newUser.username === user.username){
                   throw new Error("Please create another user name.");
               }
            });

            next();
        } catch (e) {
            return res.status(400).end(e.message);
        }
    }
};