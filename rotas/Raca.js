const express = require("express")
const raca = express.Router()
const cors = require('cors')
const Raca = require("../modelos_relacionais/Raca")

classe.use(cors())
//metodo para pegar todas as informações das raças
raca.get('getRaca',(req,res)=>{
    const racaData = {
        nome : req.body.nome,
        id: req.body.id_raca
    }
    classeData.findAll({
    })
    .then(raca =>{
        res.json(racas);
    }
    )
});

module.exports = raca;