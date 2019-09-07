class Usuario {
    constructor(nome, id, senha) {
        this.nome = nome;
        this.id = id;
        this.senha = senha;
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