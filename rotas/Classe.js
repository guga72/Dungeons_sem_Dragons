const express = require("express")
const classe = express.Router()
const cors = require('cors')
const Classe = require("../modelos_relacionais/Classe")

classe.use(cors())
//pegar todas as informações das classes
classe.get('getClasse',(req,res)=>{
    const classeData = {
        classe:{
        idClasse : req.body.id_classe,
        nome : req.body.nome
        }
    }
    classeData.findAll({
    })
    .then(classe =>{
        res.json(classe);
    }
    )
});

module.exports = classe;