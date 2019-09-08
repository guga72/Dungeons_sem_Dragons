const Personagem = require('./Personagem.js');

test('personagem deve ter um nome', () => {
    const personagem = new Personagem('Fujiro Kakombi');
    expect(personagem.getNome()).toBe('Fujiro Kakombi');
});