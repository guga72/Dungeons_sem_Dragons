const personagem = require('./personagens.js');

test('personagem deve poder ser criado', () => {
    let person = personagem.personagemJogador("nome", "sexo");
    expect(person.nome).toBe("nome");
});