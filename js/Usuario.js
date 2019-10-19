const personagem = require('./personagens.js');

class Usuario {
    constructor(email, senha) {
        this.email = email,
        this.senha = senha,
        this.personagens = []
    }

    criarPersonagemJogador(nome, sexo, raca, classe){
        let p = personagem.personagemJogador(nome, sexo);
        personagem.comporPersonagemJogador(p, raca, classe);
        this.personagens.push(p);
    }

    apagarPersonagem(){
    }

    login(){
    }

    cadastro(){
    }
}

module.exports = Usuario;