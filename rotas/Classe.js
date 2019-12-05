const express = require("express")
const classe = express.Router()
const cors = require('cors')
const Classe = require("../modelos_relacionais/Classe")

classe.use(cors())

classe.get('getClasse',(req,res)=>{
    const classeData = {
        nome : req.body.nomeClasse
    }
    classeData.findOne({
        where : {
            nome : classeData.nome
        }
    })
    .then(classe =>{
        res.json(classe);
    }
    )
});

module.exports = classe;