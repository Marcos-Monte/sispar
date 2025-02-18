// Import de arquivo de estilização
import styles from './Analises.module.scss';

// Import de Componentes
import Caminho from '../../template/Caminho/Caminho';

// Import de Icones e Imagens
import IconeHomeGray from '@/assets/icons/home.png';
import IconeSeta from '@/assets/icons/seta.png';

export default function Analises(){
    return(
        <section className={styles.container}>

            <Caminho>
                <img src={IconeHomeGray} alt="Ícone no formato de casa na cor cinza" />
                <img src={IconeSeta} alt="Ícone do símbolo 'maior que'" />
                <p>Reembolsos</p>
                <img src={IconeSeta} alt="Ícone do símbolo 'maior que'" />
                <p>Análises</p>
            </Caminho>

            <section className={styles.box}>
                <h1>Analises</h1> 
            </section>

        </section>
    )
}