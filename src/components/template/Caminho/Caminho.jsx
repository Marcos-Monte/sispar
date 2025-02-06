import styles from './Caminho.module.scss'

import IconeHomeGray from '@/assets/icons/iconHomeGray.png'
import IconeSeta from '@/assets/icons/iconSeta.png'

export default function Caminho(props){
    return(
        <section className={styles.container}>

            <img src={IconeHomeGray} alt="" />
            <img src={IconeSeta} alt="" />

            {props.caminho}

        </section>
    )
}