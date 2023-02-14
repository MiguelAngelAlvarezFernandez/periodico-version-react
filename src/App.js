import './App.css';
import Encabezado from './Components/Encabezado/Encabezado';
import Noticias from './Components/Noticias/Noticias';
import Contador from './Components/Contador/Contador';
import Rexistro from './Components/Rexistro/Rexistro';

function App() {
  return (
    <>
      <h2>Encabezado</h2>
      <Encabezado/>
      <Noticias Titulo="Encabezado1" Contenido="Este es el contenido 1 de la noticia 1"/>
      <Noticias Titulo="Encabezado2" Contenido="Este es el contenido de otra noticia que he llamado 2"/>
      <Contador/>
      <p>Formulario de registro</p>
      <Rexistro/>
    </>
  );
}

export default App;
