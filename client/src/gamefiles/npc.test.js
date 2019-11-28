const Npc = require('./npc.js');

test('npc deve poder ser criado', () => {
    let opcoes = ["A", "B", "C", "D"]
    let dialogo = "Ola"
    let npc = Npc.npc("nome", dialogo, opcoes);
    expect(npc.dialogo).toBe("Ola");
});