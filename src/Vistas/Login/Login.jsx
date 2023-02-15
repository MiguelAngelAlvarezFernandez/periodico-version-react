import { useState } from "react"

function Login() {

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
        </label>
        <label>
            Email:
            <input type="email" name="mail" value={email} onInput={manexadorDeInputEmail}/>
        </label>
        </>
    )
}

export default Login