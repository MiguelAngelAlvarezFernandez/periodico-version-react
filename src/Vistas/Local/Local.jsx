import Noticias from "../../Components/Noticias/Noticias";
import styles from "./Local.module.css"

function Local() {
    return (
      <>
        <h1>VISTA DE LOCAL</h1>
        <section className={styles.sectionLocal}>
        <h2 className={styles.encabezadoLocal}>NOTICIAS LOCAL</h2>
        <div className={styles.artsLocal}>
        <article className={styles.article}>
        <Noticias Titulo="Titulo Local 1" Contenido="Contenido Noticia Local 1"/>
        </article>
        <article className={styles.article}>
        <Noticias Titulo="Titulo Local 2" Contenido="Contenido Noticia Local 2"/>
        </article>
        </div>
        </section>
      </>
    );
  }
  
  export default Local;