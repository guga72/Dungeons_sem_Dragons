const Sequelize = require("sequelize")
const db = require("../db/db")
const Personagem = require('./Personagem')

var Usuario = db.sequelize.define(
    'usuario',
    {
        email: {
            type: Sequelize.STRING,
            primaryKey: true,
            autoIncrement: false
        },
        senha: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false,
        tableName: 'usuario'
    }

)

Usuario.hasOne(Personagem)

module.exports = Usuario;