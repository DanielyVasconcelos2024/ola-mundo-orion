import React from 'react';
import './OlaMundo.css';

function MensagemOlaMundo() {
  return (
    <div className="container">
      <h1>
        <span className="texto-neon">O</span>
        <span className="texto-neon">L</span>
        <span className="texto-neon">Á</span>
        <span className="texto-neon">,</span>
        <br/>
        <span className="texto-neon">M</span>
        <span className="texto-neon">U</span>
        <span className="texto-neon">N</span>
        <span className="texto-neon">D</span>
        <span className="icone-terra girar">🌍</span>
        <span className="texto-neon">!</span>
      </h1>
    </div>
  );
}

export default MensagemOlaMundo;