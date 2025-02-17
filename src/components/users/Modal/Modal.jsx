import { useContext } from 'react';
import styles from './Modal.module.scss';

import { Button } from '../Buttons/Button';

import Modal from 'react-modal';
import { RenderContext } from '../../../contexts/RenderContext';

Modal.setAppElement('#root');
// Adicionar condição de não permitir clicar fora dos botões quando abrir o modal
export default function ModalButton(props){

    const {modalIsOpen, closeModal} = useContext(RenderContext)

    return(
        <Modal
            isOpen={modalIsOpen} // Verificar se o modal está visível ou não
            onRequestClose={closeModal} // Requisição de fechar o modal
            contentLabel='Exemplo'
            overlayClassName={styles.modalOverlay} // Estilizar o Background do Modal
            className={styles.modalContent} // Estilizar o container do modal
        >
            <p>{props.texto}</p>

            <div className={styles.boxButtons}>
                <Button funcao={closeModal} tipo='container' cor='azul'>
                    Continuar Editando
                </Button>

                <Button funcao={closeModal}tipo='container' cor='vinho'>
                    {props.textoButton}
                </Button>
            </div>
            
        </Modal>
    )
}