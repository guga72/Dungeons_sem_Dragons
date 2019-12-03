const Sequelize = require("sequelize")
const db = require("../db/db")

module.exports = db.sequelize.define(
    'user',
    {
        email: {
            type: Sequelize.STRING,
            primaryKey: true,
            autoIncrement: true
        },
        senha: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
)