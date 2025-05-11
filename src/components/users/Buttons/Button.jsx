// Importando o Link para uso de Rotas (React-Router-Dom)
import { Link } from 'react-router-dom'
// Import de arquivo de Estilização
import styles from './Button.module.scss'

// OBS: A tag LINK garante que a navegação entre as 'rotas das paginas' na aplicação, sejam feitas via SPA
// OBS: Button recebe via props: Tipo do Botão, Cor de Fundo do Botão, Rota do Botão (não obrigatorio), Função iniciada com o evento Click (não obrigatorio) e no Children, pode receber qualquer tipo de valor e até mesmo estruturas inteiras html. Por enquanto, veremos apenas 'textos' e 'imagens'
function Button(props){
    return (
        // Tag Link recebe a rota para onde o Botão vai levar via 'props' (Botão pode ou não receber a Rota)
        <Link className={styles.link} to={props.rota}>
            {/* Evento de Click (pode ou não acontecer).  */}
            <button 
                className={`${styles[props.tipo]} ${styles[props.cor]} ${styles[props.hidden]}`}
                onClick={props.funcao}
            >
                {props.children}
            </button>
        </Link>
    )
}


export { Button }

