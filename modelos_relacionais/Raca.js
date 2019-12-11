
const Sequelize = require("sequelize")
const db = require("../db/db")
const Raca = require('./Raca')

var Raca = db.sequelize.define(
    'raca',
    {
        id_raca: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false,
        tableName: 'raca'
    }

)

module.exports = Raca;

