const Raca = require('./Raca.js');

class Personagem {
    constructor(nome, sexo, raca) {
        this.vida = 100;
        this.nome = nome;
        this.sexo = sexo;
        this.raca = raca;
        this.level = 1;
        this.potions = {
            "vida":0,
            "força": 0,
            "velocidade":0
        };
        this.atributos = {
            "Agilidade": 0,
            "Constituição": 0,
            "Força": 0,
            "Inteligência": 0,
            "Destreza": 0,
            "Carisma": 0
        }
    }
    perda_vida(dano){
        this.vida = this.vida - dano;
    }

    ganhar_vida(potion){
        this.vida = this.vida + potion;
    }

    ataque(){
        perda_vida(this.atributos.Força); // colocar para ser o do inimigo que vai tomar dano
    }
}

module.exports = Personagem;
//export default class Personagem {}
//moduexport default Personagem;