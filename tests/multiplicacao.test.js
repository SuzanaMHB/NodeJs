const multiplicacao = require('./../src/multiplicacao')

test('Adicione 2 * 2 e resulte em 4', () => {

    expect(multiplicacao(2, 2)).toBe(4);

});

test('Adicione 2 * 2 e resulte em 5', () => {

    expect(multiplicacao(2, 2)).not.toBe(5);

});
