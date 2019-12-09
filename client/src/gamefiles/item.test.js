const Item = require('./item');

test('Um item deve poder ser equipável, e oferecer atributos', () => {
    let it = Item.item('Espada comum', 100, false, true);
    let espada = Item.itemEquipavel(it, 2, 0, 0, 0);
    expect(espada.ataque).toBe(2);
});