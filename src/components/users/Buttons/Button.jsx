// Importando o Link para uso de Rotas (React-Router-Dom)
import { Link } from 'react-router-dom'
// Import de arquivo de Estilização
import styles from './Button.module.scss'

function Button(props){
    return (
        <Link to={props.rota}>
            <button 
                className={`${styles[props.tipo]} ${styles[props.cor]}`}
                onClick={props.funcao}
            >
                {props.children}
            </button>
        </Link>
    )
}


export { Button }

