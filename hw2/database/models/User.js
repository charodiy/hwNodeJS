module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        userName: {type: DataTypes.STRING, allowNull: false},
        password: {type: DataTypes.STRING, allowNull: false},
        email: {type: DataTypes.STRING, allowNull: false}
    }, {
        tableName: 'users',
        timestamps: false
    });
    return User;
};