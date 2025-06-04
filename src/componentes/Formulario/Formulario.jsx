import React, { useState } from 'react'; 
import './Formulario.css';

function FormularioEntrada({ aoEnviarFormulario }) { 
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [faculdade, setFaculdade] = useState('');

  const lidarComEnvio = (e) => {
    e.preventDefault();
    aoEnviarFormulario(); 
  };

  return (
    <div className="container-formulario">
      <div className="cartao-formulario">
        <h2 className="titulo-formulario">Cadastro</h2>
        <form onSubmit={lidarComEnvio}>
          <div>
            <input
              type="text"
              placeholder="Seu Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="campo-entrada"
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Seu Sobrenome"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
              className="campo-entrada"
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Sua Faculdade"
              value={faculdade}
              onChange={(e) => setFaculdade(e.target.value)}
              className="campo-entrada"
              required
            />
          </div>
          <button type="submit" className="botao-enviar">
            Enviar Dados
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormularioEntrada;