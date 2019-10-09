const Npc = require('./Npc.js');

test('npc deve ter um nome', () => {
    const npc = new Npc('NPC');
    expect(npc.nome).toBe('NPC');
});