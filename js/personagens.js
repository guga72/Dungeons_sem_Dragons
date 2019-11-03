const raca = require('./racas');
const classe = require('./classes');
const atributos = require('./atributos');

/*
    Composição final de um personagem de jogador
*/

const comporPersonagemJogador = (personagem, rc, cl) => {
    return Object.assign(
        personagem,
        raca.comporRaca(rc),
        classe.comporClasse(cl),
        calcularAtributosSecundarios(personagem)
    );
}



/*
    Composição básica do personagem
*/
function personagemJogador(nome, sexo){
    return {
        nome:nome,
        sexo: sexo,
        inventario: [],
        max_peso: 50,
        gold: 1,
        usarItem: usarItem,
        level: 1,
        atributos: atributos.atributos(0,0,0,0),
        eqpCabeca: null,
        eqpMaoDireita: null,
        eqpMaoEsquerda: null,
        eqpBotas: null,
        eqpTronco: null
    }
}

/*
Isso pode ser colocado em algum outro arquivo
const personagemInimigo = (nome, hp, ataque, magia, img) =>
{   return{
        nome: nome,
        hp: hp,
        ataque: ataque,
        magia: magia,
        img: img
    }
}
*/

//Função que retorna atributos:

function atributosbonus(personagem){

}

/*
    Comportamentos de qualquer jogador
*/

function usarItem(item){
    if(item.consumivel){
        consumir(item);
    }
    if(item.equipavel){
        equipar(item);
    }
}

function consumir(item){}
function equipar(item){}


//Função que compõe os objetos de raça e classe ao personagem

module.exports = {
    atributos: atributos,
    personagemJogador: personagemJogador,
    comporPersonagemJogador: comporPersonagemJogador,
}