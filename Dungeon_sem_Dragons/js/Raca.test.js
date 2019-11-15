const Raca = require('./Raca.js');

test('raca deve ter um nome', () => {
    const raca = new Raca('Orc');
    expect(raca.getNome()).toBe('Orc');
});
