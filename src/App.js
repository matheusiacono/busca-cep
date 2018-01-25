import React, { Component } from 'react';
import './App.css';
import Search from './Components/Search';
import Result from './Components/Result';
import fetchJsonp from 'fetch-jsonp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showResult: false,
      address: {},
      resultError: false,
    };
  }

  closeResult() {
    this.setState({ showResult: false });
  }

  search(err, cep) {
    this.setState({
      showResult: false,
      resultError: false,
    });
    if (err) {
      return;
    }
    fetchJsonp(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        if (json.erro) {
          this.setState({ resultError: true });
          return;
        }
        this.setState({
          showResult: true,
          address: json,
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
        {this.state.showResult ?
          <Result
            close={() => this.closeResult()}
            address={this.state.address} /> :
          this.state.resultError ?
            <p>Não foi possível consultar este CEP na API.</p> :
            null}
      </div>
    );
  }
}

export default App;
