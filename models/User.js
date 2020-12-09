const Sequelize = require('sequelize');
const db = require("../config/db");
const user = db.define("user", {
    firstname: {
        type: Sequelize.STRING
    },
    lastname: {
        type: Sequelize.STRING
    }
})

module.exports = user;