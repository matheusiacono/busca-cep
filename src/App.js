import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Consulta de endereço</h1>
        <header className="App-header">
          <h3>Consultar</h3>
          <label>CEP</label>
          <input />
          <button>Buscar</button>
        </header>
      </div>
    );
  }
}

export default App;
