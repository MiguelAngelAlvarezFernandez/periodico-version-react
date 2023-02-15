import './App.css';
import Encabezado from './Components/Encabezado/Encabezado';
import Navegador from './Components/Navegador/Navegador';
import Login from './Vistas/Login/Login';

function App() {
  return (
    <>
      <Encabezado/>

      <p>NAVEGADOR</p>
      <Navegador/>
    </>
  );
}

export default App;
