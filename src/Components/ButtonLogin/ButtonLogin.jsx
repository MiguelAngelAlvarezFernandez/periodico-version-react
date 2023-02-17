import styles from "./ButtonLogin.module.css"

function ButtonLogin (props) {
    return(
        <>
        <button className={styles.login} id="Login" onClick={props.manexadorClick}>Login</button>
        </>
    );
}

export default ButtonLogin;