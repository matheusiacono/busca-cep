import React, { Component } from 'react';
import './App.css';
import Search from './Components/Search';
import Result from './Components/Result';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showResult: false,
    };
  }

  closeResult() {
    this.setState({ showResult: false });
  }

  search(err, cep) {
    this.setState({ showResult: false });
    if (err) {
      return;
    }

    this.setState({ showResult: true });
  }

  render() {
    return (
      <div className="app">
        <h1>Consulta de endereço</h1>
        <header className="app-search">
          <h3 className="app-search-title">Consultar</h3>
          <Search search={(...value) => this.search(...value)} />
        </header>
        {this.state.showResult ? <Result close={() => this.closeResult()} /> : null}
      </div>
    );
  }
}

export default App;
