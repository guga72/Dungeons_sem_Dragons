const Sequelize = require("sequelize")
const db = require("../db/db")

var Classe = db.sequelize.define(
    'classe',
    {
        classe: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
)

module.exports = Classe;