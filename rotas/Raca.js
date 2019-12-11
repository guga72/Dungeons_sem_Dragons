const express = require("express")
const personagem = express.Router()
const cors = require('cors')
const Raca = require("../modelos_relacionais/Raca")

Raca.use(cors())

raca.get('raca/getRaca',(req, res) =>{
    Raca.findOne({
        where: {
            nome: req.body.nome
        }
    })
    .then(raca =>{
        if(raca)
        return raca;
        else{
            res.status(400).json({error: 'Raca não existe'})
        }
    })
})

module.exports = raca;