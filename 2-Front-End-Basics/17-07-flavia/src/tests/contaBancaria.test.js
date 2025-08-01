const ContaBancaria = require("../contaBancaria")

describe("Testando a classe ContaBancaria", () => {
  let banco;

  beforeEach(() => {
    banco = new ContaBancaria(0, "João")
  })

  test("Deve retornar o nome do titular", () => {
    expect(banco.titular).toBe("João")
  })

  test("Deve depositar um valor", () => {
    expect(banco.depositar(500)).toBe(500)
  })

  test("Depósito inválido", () => {
    expect(() => banco.depositar(-100).toThrow('O valor do depósito deve ser positivo.')
    )
  })

  test("Deve sacar um valor válido", () => {
    banco.depositar(500)
    expect(banco.sacar(200)).toBe(300)
  })

})
