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

    login(){ //aqui será feito a parte de login do cliente procurando no banco de dados

    }

    cadastro(){  //aqui será feito o cadastro se o email ja não foi usado

    }
}

module.exports = Usuario;