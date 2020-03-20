import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function Sobre() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="Sobre-title">Página de Sobre</h1>
      </header>
      <p className="Sobre-intro">
          Exemplo de Página Sobre :)
      </p>
      <p>
        <Link to="/">Voltar para a Home</Link>
      </p>
    </div>
  )
}

export default Sobre;
