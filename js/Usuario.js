const Personagem = require('./Personagem.js');

class Usuario {
    constructor(nome, id, senha) {
        this.nome = nome;
        this.id = id;
        this.senha = senha;
        this.personagem = null;
    }
    
    criarPersonagem(name){
        this.personagem = new Personagem(name);
    }

    getNome(){
        return this.nome;
    }

    getId(){
        return this.id;
    }

    getSenha(){
        return this.senha;
    }
}


module.exports = Usuario;