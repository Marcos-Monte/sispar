import { useContext } from 'react';
import { CrudContext } from '../../../contexts/CrudContext';

import styles from './Card.module.scss';

import IconeAnalise from '@/assets/Dashboard/Cards/n-analises.png';
import IconeAprovados from '@/assets/Dashboard/Cards/n-aprovados.png';
import IconeRejeitados from '@/assets/Dashboard/Cards/n-rejeitados.png';
import IconeSolicitados from '@/assets/Dashboard/Cards/n-solicitados.png';

export function Card(props){
    return(
        <div className={styles.cardIndividual} onClick={props.funcao}>
            <img src={props.imagem} alt="Ícone simbolizando a atividade" />
            <h3>{props.texto}</h3>
        </div>
    )
}

export function CardIndicadores(){

    const {contadorStatus} = useContext(CrudContext)

    return(
        <section className={styles.container}>

            <div className={styles.card}>
                <div className={styles.solicitados} >
                    <img src={IconeSolicitados} alt="Ícone de seta aportando pra esquerda" />
                </div>

                <span>{contadorStatus()}</span>

                <p>Solicitados</p>
            </div>

            <div className={styles.card}>
                <div className={styles.analise} >
                    <img src={IconeAnalise} alt="Ícone de um relogio" />
                </div>
                
                <span>{contadorStatus('analisando')}</span>

                <p>Em análise</p>
            </div>

            <div className={styles.card}>
                <div className={styles.aprovados} >
                    <img src={IconeAprovados} alt="Ícone de sinal de 'certo'" />
                </div>
                
                <span>{contadorStatus('aprovado')}</span>

                <p>Aprovados</p>
            </div>

            <div className={styles.card}>
                <div className={styles.rejeitado} >
                    <img src={IconeRejeitados} alt="Ícone com um X" />
                </div>
                
                <span>{contadorStatus('rejeitado')}</span>

                <p>Rejeitados</p>
            </div>

        </section>
    )
}