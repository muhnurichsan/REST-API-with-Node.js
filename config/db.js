//Database Configuration
require('dotenv').config();
const Sequelize = require('sequelize');

//secure data using dotenv
const db = new Sequelize(process.env.DBName, process.env.DBUser, process.env.DBPass, {
    host: process.env.Host,
    dialect: process.env.Dialect,
})

db.sync();
module.exports = db;