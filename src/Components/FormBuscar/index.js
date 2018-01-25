import React, { Component } from 'react';
import './index.css';

class FormBuscar extends Component {
  constructor(props) {
    super(props);
    this.state = { cep: '' };
  }

  handleChange(e) {
    this.setState({ cep: e.target.value });
  }

  handleClick() {
    const { buscar } = this.props;
    buscar(this.state.cep);
  }

  render() {
    return (
      <form className="form-inline">
        <label htmlFor="cep" className="form-label">CEP</label>
        <input
          id="cep"
          className="form-input"
          onChange={(e) => this.handleChange(e)} />
        <button
          type="button"
          className="form-button"
          onClick={() => this.handleClick()}>Buscar</button>
      </form>
    );
  }
}


export default FormBuscar;
