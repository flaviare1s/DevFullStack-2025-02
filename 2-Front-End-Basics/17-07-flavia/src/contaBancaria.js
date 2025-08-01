class ContaBancaria {
  constructor(saldo = 0, titular) {
    this.saldo = saldo
    this.titular = titular
  }

  depositar(valor) {

    if(valor < 0) {
      throw new Error('O valor do depósito deve ser positivo.')
    }

    this.saldo += valor;
    return this.saldo
  }

  sacar(valor) {

    if (valor < 0 || valor > this.saldo) {
      throw new Error("Saque inválido ou saldo insuficiente.")
    }

    this.saldo -= valor;
    return this.saldo
  }

  consultarSaldo() {
    console.log(this.saldo)
    return this.saldo
  }
}

module.exports = ContaBancaria
