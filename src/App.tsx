import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {TableroInicial} from './app/components/TableroInicial'
import { Nav, Spinner } from 'react-bootstrap';
import { Cabecera } from './app/contenedor/Cabecera';
function App() {
  const [loading, setLoading] = useState(true); //Para el Spinner
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulación de carga
}, []);

return loading ? <Spinner /> : <TableroInicial />;

}

export default App;
