import { Component } from 'react';

export class ViaCepClasse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cep: '',
      dados: null,
    };
  }

  handleChange = (event) => {
    this.setState({ cep: event.target.value });
  };

  buscarCep = async () => {
    const { cep } = this.state;
    if (!cep) return;

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const dados = await response.json();
      this.setState({ dados });
    } catch (error) {
      console.log('Erro ao buscar o CEP:', error);
    }
  };

  render() {
    const { cep, dados } = this.state;

    return (
      <div>
        <input
          type="text"
          name="cep"
          id="cep"
          placeholder="Digite o CEP"
          value={cep}
          onChange={this.handleChange}
        />
        <button type="button" onClick={this.buscarCep}>
          Buscar
        </button>

        {dados && (
          <div>
            <p><strong>Rua:</strong> {dados.logradouro}</p>
            <p><strong>Bairro:</strong> {dados.bairro}</p>
            <p><strong>Cidade:</strong> {dados.localidade}</p>
            <p><strong>Estado:</strong> {dados.uf}</p>
          </div>
        )}
      </div>
    );
  }
}
