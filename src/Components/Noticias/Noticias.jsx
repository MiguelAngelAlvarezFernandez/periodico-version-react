import styles from "./Noticias.module.css"
import imagenPrueba from "./imagenPrueba.jpg"

function Noticias(props) {
    return (
      <article className={styles.Noticias}>
        <h2>{props.Titulo}</h2>
        <p>{props.Contenido}</p>
        <img className={styles.imagenPrueba} src={imagenPrueba} alt="Imagen Prueba"/>
      </article>
    );
  }
  
  export default Noticias;