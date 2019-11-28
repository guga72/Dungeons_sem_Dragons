const Classes = require('./classes');

test('classes devem poder ser atribuídas a um objeto', () => {
    let cl = Classes.comporClasse("Guerreiro");
    let a = Object.assign(
        {},
        cl
    );

    expect(a.armas_equipaveis).toBe("espada");
});