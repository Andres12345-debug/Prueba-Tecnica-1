import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TableroInicial} from './app/components/TableroInicial'
import { Nav } from 'react-bootstrap';
import { Cabecera } from './app/contenedor/Cabecera';
function App() {
  return (
    <div className="App">
      <TableroInicial/>      
    </div>
  );
}

export default App;
