const Sequelize = require("sequelize");
const { database } = require("../db");

const Trainer = database.define("trainer", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
});

module.exports = {
    Trainer
};