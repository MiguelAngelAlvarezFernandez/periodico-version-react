import styles from "./Login.module.css"
import { useState } from "react";
import Login from "../Login/Login";

function GoToLogin() {
let [PressButton, setPressButton] = useState("Portada")
function handlerLogin(Event){
    setPressButton(<Login/>)
}

    return (
      <>
        <button className={styles.login} onClick={GoToLogin}>Login</button>
      </>
    );
  }
  
  export default Login;