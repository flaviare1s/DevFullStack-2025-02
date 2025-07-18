const calculadora = require('../calculadora')

describe('Testando a classe Calculadora', () => {
  test('Deve somar dois números corretamente', () => {
    expect(calculadora.somar(2, 2)).toBe(4)
  })

  test('Deve subtrair dois números corretamente', () => {
    expect(calculadora.subtrair(2, 2)).toBe(0)
  })

  test('Deve dividir dois números corretamente', () => {
    expect(calculadora.dividir(2, 2)).toBe(1)
  })

  test('Deve multiplicar dois números corretamente', () => {
    expect(calculadora.multiplicar(2, 2)).toBe(4)
  })

  test('Deve dividir por zero', () => {
    expect(() => calculadora.dividir(2, 0)).toThrow('Divisão por zero!')
  })

  test('Deve somar dois números incorretamente', () => {
    expect(calculadora.somar(2, 2)).not.toBe(5)
  })

  test('Deve subtrair dois números incorretamente', () => {
    expect(calculadora.subtrair(2, 2)).not.toBe(1)
  })

  test('Deve multiplicar dois números incorretamente', () => {
    expect(calculadora.multiplicar(2, 2)).not.toBe(5)
  })

  test('Deve dividir dois números incorretamente', () => {
    expect(calculadora.dividir(2, 2)).not.toBe(5)
  })

})
