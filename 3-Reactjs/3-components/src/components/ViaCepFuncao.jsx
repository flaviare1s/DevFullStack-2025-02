import { useState } from "react";

export const ViaCepFuncao = () => {
  const [cep, setCep] = useState('');
  const [dados, setDados] = useState();

  const buscarCep = async () => {
    if(!cep) return;
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const dados = await response.json();
      setDados(dados);
    } catch (error) {
      console.log(error);
    }
  } 

  return (
    <div>
      <input type="text" name="cep" id="cep" placeholder="Digite o CEP" onChange={(e) => setCep(e.target.value)} />
      <button type="button" onClick={buscarCep}>Buscar</button>
      
      {dados && (
        <div>
          <p><strong>Rua:</strong> {dados.logradouro}</p>
          <p><strong>Bairro:</strong> {dados.bairro}</p>
          <p><strong>Cidade:</strong> {dados.localidade}</p>
          <p><strong>Estado:</strong> {dados.uf}</p>
        </div>
      )}
    </div>
  )
}
