const express = require("express")
const personagem = express.Router()
const cors = require('cors')
const Raca = require("../modelos_relacionais/Classe")

Classe.use(cors())

classe.get('classe/getClasse',(req, res) =>{
    Raca.findOne({
        where: {
            nome: req.body.nome
        }
    })
    .then(raca =>{
        if(raca)
        return raca;
        else{
            res.status(400).json({error: 'Classe não existe'})
        }
    })
})

module.exports = raca;