//const Personagem = require('./Personagem.js');

class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.personagens = [];
    }
    
    criarPersonagem(name,sexo){
        let personagem = new Personagem(name, sexo);
        this.personagens.push(personagem); 
    }
}

module.exports = Usuario;