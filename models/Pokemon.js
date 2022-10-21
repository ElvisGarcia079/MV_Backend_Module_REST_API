const Sequelize = require("sequelize");
const { database } = require("../db");

const Pokemon = database.define("pokemon", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pokemon_name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = {
    Pokemon
}