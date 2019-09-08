class Personagem {
    constructor(nome, sexo) {
        this.nome = nome;
        this.sexo = sexo;
        this.atributos = {
            "Força": 0,
            "Inteligência": 0,
            "Destreza": 0
        }
    }
    
    getNome(){
        return this.nome;
    }

    getSexo(){
        return this.sexo;
    }

    getAtributos(){
        return this.atributos;
    }

}

module.exports = Personagem;