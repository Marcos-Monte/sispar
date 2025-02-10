import styles from './Dashboard.module.scss';

import { Card, CardIndicadores } from '../../users/Card/Card.jsx';

import IconeAnalises from '@/assets/Dashboard/analises.png';
import IconeHistorico from '@/assets/Dashboard/historico.png';
import IconeReembolso from '@/assets/Dashboard/reembolso.png';
import IconeAtualizado from '@/assets/Dashboard/sistema-atualizado.png';

// Componente Ilustrativo de Renderização
export default function Dashboard(props){

    return(
        <section className={styles.container}>
            <div>
                <h2>Sistema de Reembolsos</h2>
                <p>Solicite novos pedidos de reembolso, visualize solicitações em análise e todo o histórico.</p>
            </div>

            <section className={styles.containerCards}>

                <Card 
                    imagem={IconeReembolso}
                    texto='Solicitar Reembolso'
                    funcao={() => props.alterarComponente('Reembolso')}

                />
                <Card 
                    imagem={IconeAnalises}
                    texto='Verificar Analises'
                    funcao={() => props.alterarComponente('Analises')}
                />
                <Card 
                    imagem={IconeHistorico}
                    texto='Histórico'
                    funcao={() => props.alterarComponente('Historico')}
                />

            </section>

            <CardIndicadores 
                solicitados='182'
                analise='74'
                aprovados='195'
                rejeitados='41'
            />

            <div className={styles.box}>
                <img src={IconeAtualizado} alt="" />
                <p>Sistema atualizado.</p>
            </div>

        </section>
    )
}