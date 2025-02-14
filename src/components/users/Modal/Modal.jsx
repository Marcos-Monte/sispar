import { useContext } from 'react';
import styles from './Modal.module.scss';

import { Button } from '../Buttons/Button';

import Modal from 'react-modal';
import { RenderContext } from '../../../contexts/RenderContext';

Modal.setAppElement('#root');

export default function TestModal(){

    const {modalIsOpen, closeModal} = useContext(RenderContext)

    return(
        <Modal
            isOpen={modalIsOpen} // Verificar se o modal está visível ou não
            onRequestClose={closeModal} // Requisição de fechar o modal
            contentLabel='Exemplo'
            overlayClassName={styles.modalOverlay} // Estilizar o Background do Modal
            className={styles.modalContent} // Estilizar o container do modal
        >
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. doloribus praesentium! Consectetur neque omnis adipisci accusantium. Nam?</p>

            <div className={styles.boxButtons}>
                <Button funcao={closeModal} tipo='container' cor='azul'>
                    Sim
                </Button>

                <Button funcao={closeModal}tipo='container' cor='vinho'>
                    Não
                </Button>
            </div>
            
        </Modal>
    )
}