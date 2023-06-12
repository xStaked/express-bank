const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

const Transfer = db.define('Transfer', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    senderUserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    receiverUserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Transfer;
