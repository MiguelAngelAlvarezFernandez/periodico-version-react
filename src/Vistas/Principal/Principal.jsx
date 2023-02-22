import Noticias from "../../Components/Noticias/Noticias";
import styles from "./Principal.module.css";
import { useState } from "react";
import Articulos from "../Articulos/Articulos";

function Principal() {

    /*const[Nacional1, SetNacional1] = useState(false)
    function manexadorNacional1(){
    SetNacional1(true)
    }*/

    return (
      <main>
        <h1 className={styles.Portada}>PORTADA</h1>

        <section className={styles.secciones}>
        <h2 className={styles.Seccion}>SECCION NACIONAL</h2>
        <div className={styles.ArtSections}>
        <article className={styles.articles}>
        <Noticias Titulo="Tit.Portada Noticia Nacional1" /*onClick={manexadorNacional1}*/ Contenido="Contenido.Portada Noticia Nacional 1, Contenido.Portada Noticia Nacional 1Contenido.Portada Noticia Nacional 1Contenido.Portada Noticia Nacional 1Contenido.Portada Noticia Nacional 1Contenido.Portada Noticia Nacional 1Contenido.Portada Noticia Nacional 1"/>
        </article>
        <article className={styles.articles}>
        <Noticias Titulo="Tit.Portada Noticia Nacional 2" Contenido="Contenido.Portada Noticia Nacional 2"/>
        </article>
        </div>
        </section>

        <section className={styles.secciones}>
        <h2 className={styles.Seccion}>SECCION LOCAL</h2>
        <div className={styles.ArtSections}>
        <article className={styles.articles}>
        <Noticias Titulo="Tit.Portada Noticia Local 1" Contenido="Contenido.Portada Noticia Local 1"/>
        </article>
        <article className={styles.articles}>
        <Noticias Titulo="Tit.Portada Noticia Local 2" Contenido="Contenido.Portada Noticia Local 2"/>
        </article>
        </div>
        </section>

        {/*Nacional1 && <Articulos/>*/}

      </main>
    );
  }
  
  export default Principal;