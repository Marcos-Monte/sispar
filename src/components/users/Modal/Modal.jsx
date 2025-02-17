import { useContext } from 'react';
import styles from './Modal.module.scss';

import { Button } from '../Buttons/Button';

import Modal from 'react-modal';
import { RenderContext } from '../../../contexts/RenderContext';

Modal.setAppElement('#root');
// Adicionar condição de não permitir clicar fora dos botões quando abrir o modal
function ModalLimpar(){

    const {modalIsOpen, closeModal} = useContext(RenderContext)

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

                <Button funcao={closeModal}tipo='container' cor='vinho'>
                    Sim, limpar
                </Button>
            </div>
            
        </Modal>
    )
}

// Adicionar condição de não permitir clicar fora dos botões quando abrir o modal
function ModalCancelar(){

    const {modalIsOpen, closeModal} = useContext(RenderContext)

    return(
        <Modal
            isOpen={modalIsOpen} // Verificar se o modal está visível ou não
            onRequestClose={closeModal} // Requisição de fechar o modal
            contentLabel='Exemplo'
            overlayClassName={styles.modalOverlay} // Estilizar o Background do Modal
            className={styles.modalContent} // Estilizar o container do modal
        >
            <p>Tem certeza que deseja cancelar a solicitação?</p>

            <div className={styles.boxButtons}>
                <Button funcao={closeModal} tipo='container' cor='azul'>
                    Continuar Editando
                </Button>

                <Button funcao={closeModal}tipo='container' cor='vinho'>
                    Sim, Cancelar
                </Button>
            </div>
            
        </Modal>
    )
}

// Adicionar condição de não permitir clicar fora dos botões quando abrir o modal
function ModalExcluir(props){

    const {modalIsOpen, closeModal} = useContext(RenderContext)

    return(
        <Modal
            isOpen={modalIsOpen} // Verificar se o modal está visível ou não
            onRequestClose={closeModal} // Requisição de fechar o modal
            contentLabel='Exemplo'
            overlayClassName={styles.modalOverlay} // Estilizar o Background do Modal
            className={styles.modalContent} // Estilizar o container do modal
        >
            <p>Deseja realmente excluir os dados dessa linha?</p>

            <div className={styles.boxButtons}>
                <Button funcao={closeModal} tipo='container' cor='azul'>
                    Continuar Editando
                </Button>

                <Button funcao={closeModal}tipo='container' cor='vinho'>
                    Sim, excluir
                </Button>
            </div>
            
        </Modal>
    )
}

export { ModalCancelar, ModalExcluir, ModalLimpar };
