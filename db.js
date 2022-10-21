const { path } = require("express/lib/application");
const {Sequelize} = require("sequelize");

const database = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, "db.sqlite"),
    logging: false
});

module.exports = {
    database
}