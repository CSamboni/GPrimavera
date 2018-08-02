import React, { Component } from 'react';
import './App.css';
import Encabezado from './Componentes/Encabezado';
import Tarjetas from './Componentes/Tarjetas';

class App extends Component {
  render() {
    return (
      <div>
      <Encabezado />
      <Tarjetas />
      </div>
    );
  }
}
export default App;
