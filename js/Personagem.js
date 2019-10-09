const Raca = require('./Raca.js');

class Personagem {
    constructor(nome, sexo, raca) {
        this.nome = nome;
        this.sexo = sexo;
        this.raca = raca;
        this.level = 1;
        this.atributos = {
            "Agilidade": 0,gitp
            "Constituição": 0,
            "Força": 0,
            "Inteligência": 0,
            "Destreza": 0,
            "Carisma": 0
        }
    }

}

module.exports = Personagem;
//export default class Personagem {}
//moduexport default Personagem;