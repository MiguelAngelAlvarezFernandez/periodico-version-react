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

    return (
        <>
        <label>
            Nombre:
            <input type="text" name="nome" value={nome} onInput={manexadorDeInputNome}/>
            <p>Este é o contido de nome en maiusculas: {nome.toUpperCase()}</p>
        </label>
        <label>
            Email:
            <input type="email" name="mail" value={email} onInput={manexadorDeInputEmail}/>
            <p>Este é o contido de Email en maiusculas: {email.toUpperCase()}</p>
        </label>
        </>
    )
}

export default Rexistro