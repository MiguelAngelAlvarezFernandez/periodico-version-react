import { useState } from "react";
import Principal from "../../Vistas/Principal/Principal";
import Local from "../../Vistas/Local/Local";
import Nacional from "../../Vistas/Nacional/Nacional";
import Rexistro from "../../Vistas/Rexistro/Rexistro";

function Navegador() {
    const [vista, setVista] = useState("Principal")

    function manexadorClick (evento){
      setVista(evento.target.id)
    }

    return (
      <>
      <nav>
        <ul>
          <li>
            <a id="Principal" onClick={manexadorClick}>Principal</a>
          </li>
          <li>
            <a id="Local" onClick={manexadorClick}>Local</a>
          </li>
          <li>
            <a id="Nacional" onClick={manexadorClick}>Nacional</a>
          </li>
          <li>
          <a id="Registro" onClick={manexadorClick}>Registro</a>
          </li>
        </ul> 
      </nav>

      {vista==="Principal" && <Principal/>}
      {vista==="Local" && <Local/>}
      {vista==="Nacional" && <Nacional/>}
      {vista==="Registro" && <Rexistro/>}
      </>
    );
  }
  
  export default Navegador;