// Importando o Link para uso de Rotas (React-Router-Dom)
import { Link } from 'react-router-dom'
// Import de arquivo de Estilização
import styles from './Button.module.scss'

function Button(props){
    return (
        <Link to={props.rota}>
            <button 
            className={`${styles.container} ${styles[props.className]}`}
            >
                {props.texto}
            </button>
        </Link>
    )
}
function InputButton(){
    return (
        <button className={styles.container}></button>
    )
}

export { Button, InputButton }

