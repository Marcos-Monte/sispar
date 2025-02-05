import styles from './Button.module.scss'

function Button(props){
    return (
        <button 
            className={`${styles.container} ${styles[props.className]}`}
        >
            {props.texto}
        </button>
    )
}
function InputButton(){
    return (
        <button className={styles.container}></button>
    )
}

export { Button, InputButton }

