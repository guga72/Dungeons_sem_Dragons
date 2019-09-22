//const Raca = require('./Raca.js');

class Personagem {
    constructor(nome, sexo, raca) {
        this.nome = nome;
        this.sexo = sexo;
        this.raca = raca;
        this.level = 1;
        this.atributos = {
            "Agilidade": 0,
            "Constituição": 0,
            "Força": 0,
            "Inteligência": 0,
            "Destreza": 0,
            "Carisma": 0
        }
    }
    
    getNome(){
        return this.nome;
    }

    getSexo(){
        return this.sexo;
    }

    getRaca(){
        return this.raca;
    }

    getLevel(){
        return this.level;
    }

    getAtributos(){
        return this.atributos;
    }

}

module.exports = Personagem;
//export default class Personagem {}
//export default Personagem;