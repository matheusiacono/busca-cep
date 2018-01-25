import React, { Component } from 'react';
import './App.css';
import FormBuscar from './Components/FormBuscar';
import EnderecoComMapa from './Components/EnderecoComMapa';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrarEndereco: false,
    };
  }

  fecharEndereco() {
    this.setState({ mostrarEndereco: false });
  }

  buscarCep(x) {
    console.log('buscando CEP' + x);
    this.setState({ mostrarEndereco: true });
  }

  render() {
    return (
      <div className="App">
        <h1>Consulta de endereço</h1>
        <header className="App-header">
          <h3 className="App-header-title">Consultar</h3>
          <FormBuscar buscar={(x) => this.buscarCep(x)} />
        </header>
        {this.state.mostrarEndereco ? <EnderecoComMapa fechar={() => this.fecharEndereco()} /> : null}
      </div>
    );
  }
}

export default App;
