import React from 'react';
import './index.css';
import BotaoFechar from '../BotaoFechar';

const EnderecoComMapa = ({ fechar }) => (
  <main className="App-body">
    <BotaoFechar handleClick={fechar} />
    <h2>Rua Miguel Mentem</h2>
    <p>Vila Guilherme</p>
    <p>São Paulo - SP</p>
    <p>02050-010</p>
  </main>
);

export default EnderecoComMapa;
