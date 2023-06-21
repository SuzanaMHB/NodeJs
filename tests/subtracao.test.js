const diff = require('./../src/subtracao')

test('Adicione 3 - 2 e resulte em 1', () => {

    expect(diff(3, 2)).toBe(1);

});

test('Adicione 3 - 2 e resulte em 5', () => {

    expect(diff(3, 2)).not.toBe(5);

});
