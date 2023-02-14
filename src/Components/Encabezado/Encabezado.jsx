import Login from "../Login/Login";
import LogoMarca from "./LogoMarca.jpg"
import styles from "./Encabezado.module.css"

function Encabezado() {
    return (
      <header className={styles.encabezado}>
        <img className={styles.logoMarca} src={LogoMarca} alt="Logo Marca"/>
        <h1 className={styles.diarioName}>DIARIO MARCA</h1>
        <Login/>
      </header>
    );
  }
  
  export default Encabezado;