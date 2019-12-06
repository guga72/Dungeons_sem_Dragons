const Item = require('./item');

test('Um item deve poder ser equipável, e oferecer atributos', () => {
    let it = Item.item('Espada comum', 100, false, true);
    let espada = Item.itemEquipavel(it, 2, 0, 0, 0);
    expect(espada.ataque).toBe(2);
});

test('Um item deve poder ser equipável, e oferecer atributos', () => {
    let it = Item.item('Arco envergado', 100, false, true);
    let arco = Item.itemEquipavel(it, 2, 0, 0, 0);
    expect(arco.defesa).toBe(0);
});

test('Um item deve poder ser equipável, e oferecer atributos', () => {
    let it = Item.item('Adaga envenenada', 100, false, true);
    let adaga = Item.itemEquipavel(it, 2, 0, 0, 0);
    expect(adaga.magia).toBe(0);
});

test('Um item deve poder ser equipável, e oferecer atributos', () => {
    let it = Item.item('Palmatoria suprema', 100, false, true);
    let  palma = Item.itemEquipavel(it, 2, 0, 0, 0);
    expect(palma.defesam).toBe(0);
});