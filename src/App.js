import './App.css';
import Encabezado from './Components/Encabezado/Encabezado';
import Navegador from './Components/Navegador/Navegador';
import Noticias from './Components/Noticias/Noticias';

function App() {
  return (
    <>
      <h2>Encabezado</h2>
      <Encabezado/>
      <Navegador/>
      <Noticias Titulo="Encabezado1" Contenido="Este es el contenido 1 de la noticia 1"/>
      <Noticias Titulo="Encabezado2" Contenido="Este es el contenido de otra noticia que he llamado 2"/>
    </>
  );
}

export default App;
