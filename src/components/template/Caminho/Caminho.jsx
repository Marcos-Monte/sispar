// Import de arquivo de estilização
import styles from './Caminho.module.scss'

export default function Caminho(props){
    return(
        <section className={styles.container}>

            {props.children}

        </section>
    )
}