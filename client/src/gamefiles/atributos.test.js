const Atributos = require('./atributos');

test('atributos', () => {
    let atributo = Atributos.atributos(2,3,2,1);
    expect(atributo.defesa).toBe(2);
});
<<<<<<< HEAD

test('atributos', () => {
    let atributo = Atributos.atributos(2,3,2,1);
    expect(atributo.ataque).toBe(2);
});

test('atributos', () => {
    let atributo = Atributos.atributos(2,3,2,1);
    expect(atributo.magia).toBe(3);
});

test('atributos', () => {
    let atributo = Atributos.atributos(2,3,2,1);
    expect(atributo.defesam).toBe(1);
});

test('criacao errada atributos usando string', ()=>{
    let atributo = Atributos.atributos("2","3","2","1");
    expect(atributo.ataque).not.toBe(2);
});

test('criacao errada atributos usando string', () => {
    let atributo = Atributos.atributos("2","3","2","1");
    expect(atributo.ataque).not.toBe(2);
});

test('criacao errada atributos usando string', () => {
    let atributo = Atributos.atributos("2","3","2","1");
    expect(atributo.magia).not.toBe(3);
});

test('criacao errada atributos usando string', () => {
    let atributo = Atributos.atributos("2","3","2","1");
    expect(atributo.defesam).not.toBe(1);
});
=======
>>>>>>> parent of 70d4b00... teste item, inimigo, atributo
