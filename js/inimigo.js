class inimigo{
    constructor(){
        this.nome = nome;
        this.sexo = sexo;
        this.raca = raca;
        this.level = 1;
        this.gold = gold;
        //se quiserem coloca item
        this.vida = vida * this.level;
        this.atributos = {
            "Agilidade": 0,
            "Constituição": 0,
            "Força": 0,
            "Inteligência": 0,
            "Destreza": 0
        }
    }
    perda_vida(dano){
        this.vida = this.vida - dano;
    }

    ataque(){
        perda_vida(this.atributos.Força); // colocar para ser o do personagem que vai tomar dano
    }

    dropar_gold(){
        ganhar_gold(this.gold);//fazer com que o gold do inimigo va para o personagem
    }
}
