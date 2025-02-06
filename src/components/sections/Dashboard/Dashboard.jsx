import styles from './Dashboard.module.scss';

import { Card, CardIndicadores } from '../../users/Card/Card.jsx';

import IconeAtualizado from '@/assets/icons/iconAtualizado.png';
import IconeHistorico from '@/assets/icons/iconHistorico.png';
import IconeIndicadores from '@/assets/icons/iconIndicadores.png';
import IconePrancheta from '@/assets/icons/iconPrancheta.png';

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
                    imagem={IconePrancheta}
                    texto='Solicitar Reembolso'
                    funcao={() => props.alterarComponente('Reembolso')}

                />
                <Card 
                    imagem={IconeIndicadores}
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