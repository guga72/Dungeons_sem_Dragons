const Mapa = require('./mapa.js');

test('certos cenario não devem poder spawnar monstros', () => {
    let cenario = Mapa.cenario("Guilda dos Ladrões", false)
    expect(cenario.nome).toBe("Guilda dos Ladrões");
});

test('certos cenario deve poder spawnar monstros', () => {
    let cenario = Mapa.cenario("Estalagem Pé-Cheiroso", true)
    expect(cenario.nome).toBe("Estalagem Pé-Cheiroso");
});