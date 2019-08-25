class personagem{
    constructor(nome, classe, raca){
        this.nome = nome;
        this.raca = raca;
        this.classe = classe;
        this.hp += raca.hp;
        this.forca += raca.forca;
        this.constituicao += raca.constituicao;
        this.inteligencia += raca.inteligencia;
        this.carisma += raca.carisma;
        this.destreza += raca.destreza;
        this.sabedoria += raca.sabedoria;
    }
}