// Import de arquivo de Estilização
import styles from './Dashboard.module.scss';
// Import de Componentes
import Caminho from '../../template/Caminho/Caminho.jsx';
import { Card, CardIndicadores } from '../../users/Card/Card.jsx';
// Import de Icones e Imagens
import IconeAnalises from '@/assets/Dashboard/analises.png';
import IconeHistorico from '@/assets/Dashboard/historico.png';
import IconeReembolso from '@/assets/Dashboard/reembolso.png';
import IconeAtualizado from '@/assets/Dashboard/sistema-atualizado.png';
import IconeHomeGray from '@/assets/icons/home.png';
import IconeSeta from '@/assets/icons/seta.png';

// Componente Ilustrativo de Renderização
export default function Dashboard(props){

    return(
        <section className={styles.container}>

            <Caminho>
                <img src={IconeHomeGray} alt="" />
                <img src={IconeSeta} alt="" />
                <p>Reembolsos</p>
            </Caminho>
            
            <section className={styles.box}>

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

                <div className={styles.boxSistema}>
                    <img src={IconeAtualizado} alt="" />
                    <p>Sistema atualizado.</p>
                </div>
            </section>

        </section>
    )
}