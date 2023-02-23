import './App.css';
import Encabezado from './Components/Encabezado/Encabezado';
import Navegador from './Components/Navegador/Navegador';
import { useState } from 'react';

function App() {

  const [vista, setVista] = useState("Principal")
  function manexadorClick (evento){
    setVista(evento.target.id)
  }

  return (
    <div>
      <Encabezado manexadorClick={manexadorClick}/>
      <Navegador vista={vista} manexadorClick={manexadorClick}/>   
    </div>
  );
}

export default App;
