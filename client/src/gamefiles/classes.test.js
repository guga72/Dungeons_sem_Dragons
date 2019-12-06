const Classes = require('./classes');

test('classes devem poder ser atribuídas a um objeto', () => {
    let cl = Classes.comporClasse("Guerreiro");
    let a = Object.assign(
        {},
        cl
    );

    expect(a.armas_equipaveis).toBe("espada");
});

test('classes devem poder ser atribuídas a um objeto', () => {
    let cl = Classes.comporClasse("Arqueiro");
    let a = Object.assign(
        {},
        cl
    );

    expect(a.armas_equipaveis).toBe("arco");
});

test('classes devem poder ser atribuídas a um objeto', () => {
    let cl = Classes.comporClasse("Ladino");
    let a = Object.assign(
        {},
        cl
    );

    expect(a.armas_equipaveis).toBe("adaga");
});

test('classes devem poder ser atribuídas a um objeto', () => {
    let cl = Classes.comporClasse("Evangélico");
    let a = Object.assign(
        {},
        cl
    );

    expect(a.armas_equipaveis).toBe("palmatoria");
});