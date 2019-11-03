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
        atributosbonus(personagem)
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
    let ataqueBonus = personagem.eqpCabeca.ataque + personagem.eqpMaoDireita.ataque + personagem.eqpMaoEsquerda.ataque + personagem.eqpBotas.ataque + personagem.eqpTronco.ataque
    let defesaBonus = personagem.eqpCabeca.defesa + personagem.eqpMaoDireita.defesa + personagem.eqpMaoEsquerda.defesa + personagem.eqpBotas.defesa + personagem.eqpTronco.defesa
    let magiaBonus = personagem.eqpCabeca.magia + personagem.eqpMaoDireita.magia + personagem.eqpMaoEsquerda.magia + personagem.eqpBotas.magia + personagem.eqpTronco.magia
    let defesaMBonus = personagem.eqpCabeca.defesam + personagem.eqpMaoDireita.ataque + personagem.eqpMaoEsquerda.ataque + personagem.eqpBotas.ataque + personagem.eqpTronco.ataque

    return {
        ataqueBonus: ataqueBonus,
        defesaBonus: defesaBonus,
        magiaBonus: magiaBonus,
        defesaMBonus: defesaMbonus
    }
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