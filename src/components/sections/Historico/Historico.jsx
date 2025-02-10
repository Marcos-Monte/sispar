// Import de arquivo de estilização
import styles from './Historico.module.scss';
// Import componentes
import Caminho from '../../template/Caminho/Caminho';

// Import de Icones e Imagens
import IconeHomeGray from '@/assets/icons/home.png';
import IconeSeta from '@/assets/icons/seta.png';

export default function Historico(){
    return(
        <section className={styles.container}>

            <Caminho>
                <img src={IconeHomeGray} alt="" />
                <img src={IconeSeta} alt="" />
                <p>Reembolsos</p>
                <img src={IconeSeta} alt="" />
                <p>Histórico de Reembolsos</p>
            </Caminho>

            <section className={styles.box}>
                <h1>Histórico</h1> 
            </section> 

        </section>
    )
}