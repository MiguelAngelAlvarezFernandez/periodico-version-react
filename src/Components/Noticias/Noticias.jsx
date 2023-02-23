import styles from "./Noticias.module.css"

function Noticias(props) {
    return (
      <article className={styles.Noticias}>
        <h2>{props.Titulo}</h2>
        <p>{props.Contenido}</p>
        {props.imagen && <img className={styles.imagenPrueba} src={props.imagen} alt="Imagen Prueba"/>}
        <p>{props.Noticia}</p>
      </article>
    );
  }
  
  export default Noticias;