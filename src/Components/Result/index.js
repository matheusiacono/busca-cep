import React from 'react';
import './index.css';
import CloseButton from '../CloseButton';

const Result = ({ close, address }) => (
  <main className="app-result">
    <CloseButton onClick={close} />
    <h2 className="app-result-street">{address.logradouro}</h2>
    <p className="app-result-address">{address.bairro}</p>
    <p className="app-result-address">{`${address.localidade} - ${address.uf}`}</p>
    <p className="app-result-address">{address.cep}</p>
  </main>
);

export default Result;
