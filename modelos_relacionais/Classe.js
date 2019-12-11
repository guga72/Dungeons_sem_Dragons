

const Sequelize = require("sequelize")
const db = require("../db/db")
const Classe = require('./Classe')

var Classe = db.sequelize.define(
    'classe',
    {
        id_classe: {
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
        tableName: 'classe'
    }

)

module.exports = Classe;
