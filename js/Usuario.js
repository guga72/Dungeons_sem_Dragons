const Personagem = require('./Personagem.js');

class Usuario {
    constructor(nome, id, senha, email) {
        this.nome = nome;
        this.id = id;
        this.senha = senha;
        this.email = email;
        this.personagens = [];
    }
    
    criarPersonagem(name,sexo){
        let personagem = new Personagem(name, sexo);
        this.personagens.add(personagem); 
    }

    get nome() // ver como funciona o get e o nome do campo
    {
        return this.nome;
    }

    get id(){
        return this.id;
    }

    get senha(){
        return this.senha;
    }
}


module.exports = Usuario;