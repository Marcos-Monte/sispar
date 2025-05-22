// Importando o Link para uso de Rotas (React-Router-Dom)
import { Link } from 'react-router-dom'
// Import de arquivo de Estilização
import styles from './Button.module.scss'

function Button({tipo, cor, rota,funcao, typeButton = 'button', hidden, children}){
    const estilos = `${styles[tipo]} ${styles[cor]} ${styles[hidden]}`

    // Se tiver Rota
    if(rota){
        return (
        
            <Link className={styles.link} to={rota}>
                <button 
                    className={estilos}
                    type={typeButton}
                >
                    {children}
                </button>
            </Link>
        )
    } 
        
    return (
        
            <button 
                className={estilos}
                onClick={funcao}
                type={typeButton}
            >
                {children}
            </button>
        )
    
}


export { Button }

