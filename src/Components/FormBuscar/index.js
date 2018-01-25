import React from 'react';
import './index.css';

const FormBuscar = () => (
  <form className="form-inline">
    <label htmlFor="cep" className="form-label">CEP</label>
    <input id="cep" className="form-input" />
    <button type="button" className="form-button">Buscar</button>
  </form>
);

export default FormBuscar;
