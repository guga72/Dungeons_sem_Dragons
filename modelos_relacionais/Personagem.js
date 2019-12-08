const Sequelize = require("sequelize")
const db = require("../db/db")
const Raca = require("./Raca")
const Classe = require("./Classe")

var Personagem = db.sequelize.define(
    'personagem',
    {
        id_personagem: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: Sequelize.STRING
        },
        sexo: {
            type: Sequelize.STRING
        },
        gold: {
            type: Sequelize.INTEGER
        },
        nivel: {
            type: Sequelize.INTEGER
        },
        ataque: {
            type: Sequelize.INTEGER
        },
        magia: {
            type: Sequelize.INTEGER
        },
        defesa: {
            type: Sequelize.INTEGER
        },
        defesam: {
            type: Sequelize.INTEGER
        },
        id_raca: {
            type: Sequelize.INTEGER
        },
        id_classe: {
            type: Sequelize.INTEGER
        },
        id_usuario: {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false
    }

)

//Personagem.hasOne(Raca);
//Personagem.hasOne(Classe);


module.exports = Personagem;