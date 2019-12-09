const personagem = require('./personagens.js');
const Item = require('./item');
const Inimigo = require('./inimigo');

test('personagem deve poder ser criado', () => {
    let person = personagem.personagemJogador("nome", "sexo");
    expect(person).toBe({
        nome:"nome",
        sexo: "sexo",
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
    );
});

test('personagem deve poder equipar equipamentos', () => {
    let person = personagem.personagemJogador("nome", "sexo");
    let it = Item.item('Capacete dos marretão', 100, false, true);
    person.eqp.Cabeca = Item.itemEquipavel(it, 0, 5, 0, 2);
    expect(person.nome).toBe("nome");
});

test('personagem ataque', () =>{
    let person = personagem.personagemJogador("nome", "sexo");
    let enemy = Inimigo.inimigo('inimigo', 100, 5, 0, 1, 1);
    personagem.atacar(person, enemy);
    expect(enemy.hp).toBe(99);
});

test('personagem descanso', () =>{
    let person = personagem.personagemJogador("nome", "sexo");
    let enemy = Inimigo.inimigo('inimigo', 100, 51, 0, 1, 1);
    personagem.atacar(enemy, person);
    personagem.descansar(person);
    expect(person.vida).toBe(100);
});