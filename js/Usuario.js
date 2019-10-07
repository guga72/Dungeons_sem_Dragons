const Personagem = require('./Personagem.js');

module.exports = class Usuario {
    constructor(nome, id, senha, email) {
        this.nome = nome;
        this.id = id;
        this.senha = senha;
        this.email = email;
        this.personagens = [];
    }
    
    criarPersonagem(name,sexo){
        let personagem = new Personagem(name, sexo);
        this.personagens.push(personagem); 
    }
   set nome(nome){
        this._nome = nome;
    }
    set id(id){
        this._id = id;
    }
    set senha(senha){
        this._senha = senha;
    }
    set email(email){
        this._email = email;
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

    get email(){
        return this.email;
    }
}

//module.export = Usuario;