import { useContext } from 'react';
import styles from './Modal.module.scss';

import { Button } from '../Buttons/Button';

import Modal from 'react-modal';

import { CrudContext } from '../../../contexts/CrudContext.jsx';
import { RenderContext } from '../../../contexts/RenderContext.jsx';


Modal.setAppElement('#root');
// Adicionar condição de não permitir clicar fora dos botões quando abrir o modal
function ModalButton(){

    const {modalIsOpen, closeModal} = useContext(RenderContext)
    const {limparDados} = useContext(CrudContext)

    function limpar(){
        limparDados()

        setTimeout(() => {
            closeModal()
        }, 100)
    }

    return(
        <Modal
            isOpen={modalIsOpen} // Verificar se o modal está visível ou não
            onRequestClose={closeModal} // Requisição de fechar o modal
            contentLabel='Exemplo'
            overlayClassName={styles.modalOverlay} // Estilizar o Background do Modal
            className={styles.modalContent} // Estilizar o container do modal
        >
            <p>Deseja realmente limpar os campos preenchidos acima?</p>

            <div className={styles.boxButtons}>
                <Button funcao={closeModal} tipo='container' cor='azul'>
                    Continuar Editando
                </Button>

                <Button funcao={limpar} tipo='container' cor='vinho'>
                    Sim, limpar
                </Button>
            </div>
            
        </Modal>
    )
}



export { ModalButton };
