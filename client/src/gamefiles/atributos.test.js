const Atributos = require('./atributos');

test('atributos', () => {
    let atributo = Atributos.atributos(2,3,2,1);
    expect(atributo.defesa).toBe(2);
});
