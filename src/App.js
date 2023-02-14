import './App.css';
import Encabezado from './Components/Encabezado/Encabezado';
import Noticias from './Components/Noticias/Noticias';
import Contador from './Components/Contador/Contador';

function App() {
  return (
    <>
      <h2>Encabezado</h2>
      <Encabezado/>
      <Noticias Titulo="Encabezado1" Contenido="Este es el contenido 1 de la noticia 1"/>
      <Noticias Titulo="Encabezado2" Contenido="Este es el contenido de otra noticia que he llamado 2"/>
      <Contador/>
    </>
  );
}

export default App;
