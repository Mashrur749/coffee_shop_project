const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        username: { type: DataTypes.STRING, allowNull: false },
        itemIds: { type: DataTypes.STRING, allowNull: false },
        totalCost: {type: DataTypes.DOUBLE, allowNull: false},
        isReady: { type: DataTypes.BOOLEAN, allowNull: false }
    };


    return sequelize.define('Order', attributes);
}