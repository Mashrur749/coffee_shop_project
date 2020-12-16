const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        itemname: { type: DataTypes.STRING, allowNull: false },
        category: { type: DataTypes.STRING, allowNull: false },
    };

    const options = {
        defaultScope: {
            attributes: {}
        },
    };

    return sequelize.define('Menu', attributes);
}