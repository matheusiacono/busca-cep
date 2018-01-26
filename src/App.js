import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';

import './App.css';
import Search from './Components/Search';
import Result from './Components/Result';
import barLoader from './assets/bar-loader.gif';

const CEP_URL = (cep) => `https://viacep.com.br/ws/${cep}/json/`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showResult: false,
      address: {},
      resultError: false,
      location: '',
      loading: false,
    };
  }

  closeResult() {
    this.setState({
      showResult: false,
      location: '',
    });
  }

  search(err, cep) {
    this.setState({
      showResult: false,
      resultError: false,
      location: '',
    });
    if (err) {
      return;
    }
    this.setState({ loading: true });
    fetchJsonp(CEP_URL(cep))
      .then(response => response.json())
      .then(json => {
        if (json.erro) {
          this.setState({ resultError: true, loading: false });
          return;
        }
        this.setState({
          showResult: true,
          loading: false,
          address: json,
          location: `${json.logradouro} ${json.bairro} ${json.localidade} ${json.uf}`,
        });
      });
  }

  render() {
    return (
      <div className="app">
        <h1>Consulta de endereço</h1>
        <header className="app-search">
          <h3 className="app-search-title">Consultar</h3>
          <Search search={(...value) => this.search(...value)} />
        </header>

        {this.state.loading ?
          <img
            style={{ display: 'block', margin: '0 auto' }}
            src={barLoader}
            alt="carregando" /> :
          this.state.showResult ?
            <Result
              close={() => this.closeResult()}
              address={this.state.address}
              location={this.state.location} /> :
            this.state.resultError ?
              <p>Este CEP não foi encontrado.</p> :
              null}
      </div>
    );
  }
}

export default App;
