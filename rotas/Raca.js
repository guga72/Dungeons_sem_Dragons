const express = require("express")
const raca = express.Router()
const cors = require('cors')
const Raca = require("../modelos_relacionais/Raca")

classe.use(cors())

raca.get('getRaca',(req,res)=>{
    const racaData = {
        nome : req.body.nomeRaca
    }
    classeData.findOne({
        where : {
            nome : racaData.nome
        }
    })
    .then(raca =>{
        res.json(raca);
    }
    )
});

module.exports = raca;