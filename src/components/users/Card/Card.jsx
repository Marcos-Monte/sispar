import styles from './Card.module.scss';

import IconeAnalise from '@/assets/icons/indicadores/iconAnalise.png';
import IconeAprovados from '@/assets/icons/indicadores/iconAprovados.png';
import IconeRejeitados from '@/assets/icons/indicadores/iconRejeitados.png';
import IconeSolicitados from '@/assets/icons/indicadores/iconSolicitados.png';

export function Card(props){
    return(
        <div className={styles.cardIndividual} onClick={props.funcao}>
            <img src={props.imagem} alt="" />
            <h3>{props.texto}</h3>
        </div>
    )
}

export function CardIndicadores(props){
    return(
        <section className={styles.container}>

            <div className={styles.card}>
                <div className={styles.solicitados} >
                    <img src={IconeSolicitados} alt="" />
                </div>

                <span>{props.solicitados}</span>

                <p>Solicitados</p>
            </div>

            <div className={styles.card}>
                <div className={styles.analise} >
                    <img src={IconeAnalise} alt="" />
                </div>
                
                <span>{props.analise}</span>

                <p>Em análise</p>
            </div>

            <div className={styles.card}>
                <div className={styles.aprovados} >
                    <img src={IconeAprovados} alt="" />
                </div>
                
                <span>{props.aprovados}</span>

                <p>Aprovados</p>
            </div>

            <div className={styles.card}>
                <div className={styles.rejeitado} >
                    <img src={IconeRejeitados} alt="" />
                </div>
                
                <span>{props.rejeitados}</span>

                <p>Rejeitados</p>
            </div>

        </section>
    )
}