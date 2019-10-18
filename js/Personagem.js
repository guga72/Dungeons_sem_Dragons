const Raca = require('./Raca.js');
const Inimigo = require('./inimigo');

class Personagem {
    constructor(nome, sexo, raca) {
        this.vida = 100;
        this.vida_max = 100;
        this.nome = nome;
        this.sexo = sexo;
        this.raca = raca;
        this.level = 1;
        this.gold = 0;
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
        this.ataques = []; // habilidades que poderão ser usadas durante o combate
        this.itens = []; // os tres estarão somente no banco de dados
        this.quest = [];
    }
    perda_vida(dano){
        this.vida = this.vida - dano;
    }

    ganhar_vida(potion){
        this.vida = this.vida + potion;
    }

    ataque(inimigo){
        inimigo.perda_vida(this.atributos.Força); // colocar para ser o do inimigo que vai tomar dano
    }

    ganhar_gold(gold){
        this.gold += gold;
    }
    sair_combate(){ //metodo para sair do combate
        this.vida -= 20;
    }
    descansar(){
        this.vida = this.vida_max;
    }
}

module.exports = Personagem;