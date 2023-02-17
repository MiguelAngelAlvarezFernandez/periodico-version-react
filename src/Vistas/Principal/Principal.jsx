import Noticias from "../../Components/Noticias/Noticias";
import styles from "./Principal.module.css"

function Principal() {
    return (
      <main>
        <h1 className={styles.Portada}>PORTADA</h1>

        <section>
        <h2 className={styles.Seccion}>SECCION NACIONAL</h2>
        <div className={styles.ArtSections}>
        <article>
        <Noticias Titulo="Tit.Portada Noticia Nacional 1" Contenido="Contenido.Portada Noticia Nacional 1"/>
        </article>
        <article>
        <Noticias Titulo="Tit.Portada Noticia Nacional 2" Contenido="Contenido.Portada Noticia Nacional 2"/>
        </article>
        </div>
        </section>

        <section>
        <h2 className={styles.Seccion}>SECCION LOCAL</h2>
        <div className={styles.ArtSections}>
        <article>
        <Noticias Titulo="Tit.Portada Noticia Local 1" Contenido="Contenido.Portada Noticia Local 1"/>
        </article>
        <article>
        <Noticias Titulo="Tit.Portada Noticia Local 2" Contenido="Contenido.Portada Noticia Local 2"/>
        </article>
        </div>
        </section>
      </main>
    );
  }
  
  export default Principal;