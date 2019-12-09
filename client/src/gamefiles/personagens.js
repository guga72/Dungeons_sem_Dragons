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
        vida: 100,
        ataque: 1,
        defesa: 1,
        magia: 1,
        defesaM: 1,
        inventario: [],
        max_peso: 50,
        gold: 0,
        level: 1,
        eqp: {
            Cabeca: null,
            MaoDireita: null,
            MaoEsquerda: null,
            Botas: null,
            Tronco: null
            }
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
    let ataqueBonus = 0
    let defesaBonus = 0
    let magiaBonus = 0
    let defesaMBonus = 0

    for(let i in personagem.eqp){
        if(i != null){
            ataqueBonus += i.ataque;
            defesaBonus += i.defesa;
            magiaBonus += i.magia;
            defesaMBonus += i.defesam;
        }
    }
    return {
        ataqueBonus: ataqueBonus,
        defesaBonus: defesaBonus,
        magiaBonus: magiaBonus,
        defesaMBonus: defesaMBonus
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

function levelup(personagem){
    personagem.ataque += 1;
    personagem.defesa += 1;
    personagem.defesaM += 1;
    personagem.level += 1;
}


function droparGold(personagem, personagemInimigo){
    personagem.gold += personagemInimigo.gold;
}


function atacar(personagem, adversario){
    if(personagem.ataque > adversario.defesa){
        adversario.hp -=  personagem.ataque;
    }
}

//função de descanso
function descansar(personagem){
    personagem.vida = 100;
}

//Função que compõe os objetos de raça e classe ao personagem

module.exports = {
    atributos: atributos,
    personagemJogador: personagemJogador,
    comporPersonagemJogador: comporPersonagemJogador,
    atacar : atacar,
    descansar : descansar,
}