import React, { Component } from 'react';
import './index.css';
import CepInput from '../CepInput';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { cep: '', error: false };
  }

  handleChange(e) {
    this.setState({ cep: e.target.value.replace(/\D/g, '') });
  }

  handleClick() {
    const { search } = this.props;
    const { cep } = this.state
    if (cep.length === 8) {
      this.setState({ error: false });
      search(false, cep);
    } else {
      this.setState({ error: true });
      search(true);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.handleClick();
  }

  render() {
    return (
      <form onSubmit={(e) => { this.handleSubmit(e); }}>
        <label htmlFor="cep" className="search-label">CEP</label>
        <CepInput
          id="cep"
          className={this.state.error ? 'search-input search-input-error' : 'search-input'}
          onChange={(e) => this.handleChange(e)} />
        <button
          type="button"
          className="search-button"
          onClick={() => this.handleClick()}>Buscar</button>
        {
          this.state.error
            ? <p style={{ color: 'red' }}>O valor do CEP está incorreto!</p>
            : null
        }
      </form>
    );
  }
}


export default Search;
