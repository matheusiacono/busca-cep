import React from 'react';
import './index.css';
import CloseButton from '../CloseButton';

const Result = ({ close }) => (
  <main className="app-result">
    <CloseButton onClick={close} />
    <h2 className="app-result-street">Rua Miguel Mentem</h2>
    <p className="app-result-address">Vila Guilherme</p>
    <p className="app-result-address">São Paulo - SP</p>
    <p className="app-result-address">02050-010</p>
  </main>
);

export default Result;
