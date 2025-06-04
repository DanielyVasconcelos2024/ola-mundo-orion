// src/App.jsx
import React, { useState } from 'react';
import FormularioEntrada from './componentes/Formulario/Formulario.jsx'; 
import MensagemOlaMundo from './componentes/OlaMundo/OlaMundo.jsx';     
import './App.css';

function App() {
  const [mostrarOlaMundo, setMostrarOlaMundo] = useState(false);

  const aoEnviarFormulario = () => { // Esta é a função que você quer passar
    setMostrarOlaMundo(true);
  };

  return (
    <div className="aplicativo-container">
      {mostrarOlaMundo ? (
        <MensagemOlaMundo />
      ) : (
        <FormularioEntrada aoEnviarFormulario={aoEnviarFormulario} /> 
      )}
    </div>
  );
}

export default App;