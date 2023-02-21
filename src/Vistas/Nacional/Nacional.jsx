import Noticias from "../../Components/Noticias/Noticias";
import styles from "./Nacional.module.css"

function Nacional() {
    return (
      <>
        <h1>VISTA DE NACIONAL</h1>
        <section className={styles.sectionNacional}>
        <h2 className={styles.encabezadoNacional}>NOTICIAS NACIONAL</h2>
        <div className={styles.artsNacional}>
        <article className={styles.article}>
        <Noticias Titulo="Titulo Nacional 1" Contenido="Contenido Noticia Nacional 1"/>
        </article>
        <article className={styles.article}>
        <Noticias Titulo="Titulo Nacional 2" Contenido="Contenido Noticia Nacional 2"/>
        </article> 
        </div>    
        </section>
      </>
    );
  }
  
  export default Nacional;