import React, { Component } from 'react';
import axios from 'axios';
import fetchJsonp from 'fetch-jsonp';

import './App.css';
import Search from './Components/Search';
import Result from './Components/Result';

const MAPS_API_KEY = 'AIzaSyDrOfx4R7j4oNFtVPMR2r8tjsTfKWLnTRA';
const CEP_URL = (cep) => `https://viacep.com.br/ws/${cep}/json/`;
const MAPS_URL = 'https://maps.googleapis.com/maps/api/geocode/json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showResult: false,
      address: {},
      resultError: false,
      coordinates: {},
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
    fetchJsonp(CEP_URL(cep))
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
        this.setLocation(`${json.logradouro} ${json.bairro} ${json.localidade} ${json.uf}`);
      });
  }

  setLocation(address) {
    axios
      .get(`${MAPS_URL}?address=${address}&key=${MAPS_API_KEY}`)
      .then(response => {
        if (response.data.status === 'OK') {
          this.setState({ coordinates: response.data.results[0].geometry.location });
        }
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
            address={this.state.address}
            coordinates={this.state.coordinates} /> :
          this.state.resultError ?
            <p>Não foi possível consultar este CEP na API.</p> :
            null}
      </div>
    );
  }
}

export default App;
