import { useState } from "react"

function Rexistro() {

    let [ nome, setNome ] = useState(" ")
    function manexadorDeInputNome(evento) {
        setNome(evento.target.value);
    }

    let [ email, setEmail] = useState(" ")
    function manexadorDeInputEmail(evento) {
        setEmail(evento.target.value);
    }

    let [ contraseña, setcontraseña] = useState("")
    function manexadorDeInputContraseña (evento){
        setcontraseña(evento.target.value)
    }

    let [ Cookies, setCookies ] =useState("")
    function manexadorCookies(evento){
        setCookies(evento.target.value)
        console.log(Cookies)
    }

    let [Comentario, setComentario] = useState("Deja aquí tu comentario")
    function manexadorDeComentario(evento) {
        setComentario(evento.target.value)
    }

    return (
        <>
        <label>
            Nombre:
            <input type="text" name="nome" value={nome} onInput={manexadorDeInputNome}/>
        </label>
        <label>
            Email:
            <input type="email" name="mail" value={email} onInput={manexadorDeInputEmail}/>
            <p>Este é o contido de Email en maiusculas: {email.toUpperCase()}</p>
        </label>

        <label>
            Contraseña:
            <input type="password" name="contraseña" value={contraseña} onInput={manexadorDeInputContraseña}/>
        </label>

        <p>Información de Cokies</p>
        <label>
            <input type="radio" name="Cookies" value="AceptaTodo" onClick={manexadorCookies}/>
            Acepto todas las cookies.
        </label>
        <label>
            <input type="radio" name="Cookies" value="AceptaParcial" onClick={manexadorCookies}/>
            Acepto solo las cookies necesarias para el funcionamiento.
        </label>
        <label>
            <input type="radio" name="Cookies" value="NoAcepta" onClick={manexadorCookies}/>
            No acepto cookies.
        </label>

        <label>
            Ayúdanos a mejorar:
            <textarea name="Comentario" cols="30" rows="10" value={Comentario} onInput={manexadorDeComentario}></textarea>
        </label>
        </>
    )
}

export default Rexistro