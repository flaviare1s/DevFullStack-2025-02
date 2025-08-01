const soma = require('../soma');

test('Soma 2 + 2 deve ser 4', () => {
  expect(soma(2, 2)).toBe(4);
});

test('Soma 2 + 2 não deve ser 5', () => {
  expect(soma(2, 2)).not.toBe(5);
});
