
const express = require("express")
const personagem = express.Router()
const cors = require('cors')
const Personagem = require("../modelos_relacionais/Personagem")

personagem.use(cors())

process.env.SECRET_KEY = 'secret'

personagem.post('/criarPersonagem', (req, res) => {
    const userData = {
        nome: req.body.nome,
        sexo: req.body.sexo,
        raca: req.body.raca,
        id_classe: req.body.classe,
        sexo: req.body.sexo
    }
    .then(personagem => {
        Personagem.create(userData)
        .then(personagem => {
            res.json({status: personagem.nome + ' criado'})
        })
        .catch(err => {
            res.send('error: ' + err)
        })
    })
})

module.exports = personagem;

