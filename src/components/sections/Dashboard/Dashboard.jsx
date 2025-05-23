import Caminho from '../../template/Caminho/Caminho.jsx';
import { Card, CardIndicadores } from '../../users/Card/Card.jsx';
import styles from './Dashboard.module.scss';

import IconeHistorico from '@/assets/Dashboard/historico.png';
import IconeReembolso from '@/assets/Dashboard/reembolso.png';
import IconeAtualizado from '@/assets/Dashboard/sistema-atualizado.png';
import IconeHomeGray from '@/assets/icons/home.png';
import IconeSeta from '@/assets/icons/seta.png';

import { useContext } from 'react';
import { RenderContext } from '../../../contexts/RenderContext.jsx';

export default function Dashboard(){

    const {alterarRender} = useContext(RenderContext)

    return(
        <section className={styles.container}>

            <Caminho
                estilo="hidden"
            >
                <img src={IconeHomeGray} alt="Ícone no formato de casa na cor cinza" />
                <img src={IconeSeta} alt="Ícone do símbolo 'maior que'" />
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
                        funcao={() => alterarRender('Reembolso')}

                    />
                    <Card 
                        imagem={IconeHistorico}
                        texto='Histórico'
                        funcao={() => alterarRender('Historico')}
                    />

                </section>

                <CardIndicadores />

                <div className={styles.boxSistema}>
                    <img src={IconeAtualizado} alt="Ícone de uma nuvem com o símbolo de 'correto', indicando que o sistema está atualizado" />
                    <p>Sistema atualizado.</p>
                </div>
            </section>

        </section>
    )
}