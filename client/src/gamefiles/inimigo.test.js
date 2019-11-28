const Inimigo = require('./inimigo');

test('inimigo', () => {
    let enemy = Inimigo.inimigo('inimigo', 200, 5, 2, 1, 1);
    
    expect(enemy.hp).toBe(200);
});