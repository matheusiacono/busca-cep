import React, { Component } from 'react';
import './App.css';
import FormBuscar from './Components/FormBuscar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Consulta de endereço</h1>
        <header className="App-header">
          <h3 className="App-header-title">Consultar</h3>
          <FormBuscar />
        </header>
      </div>
    );
  }
}

export default App;
