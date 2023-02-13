import Login from "../Login/Login";
import LogoMarca from "./LogoMarca.jpg"

function Encabezado() {
    return (
      <>
        <img src={LogoMarca} alt="Logo Marca"/>
        <h1>DIARIO MARCA</h1>
        <Login/>
      </>
    );
  }
  
  export default Encabezado;