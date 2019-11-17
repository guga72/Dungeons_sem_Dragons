const Mapa = require('./mapa.js');

test('cenario deve poder ser criado', () => {
    let cenario = Mapa.cenario("cenario", false)
    expect(cenario.nome).toBe("cenario");
});