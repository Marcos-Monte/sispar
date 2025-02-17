import { useContext } from 'react';
import styles from './Modal.module.scss';

import { Button } from '../Buttons/Button';

import Modal from 'react-modal';

import { CrudContext } from '../../../contexts/CrudContext.jsx';
import { RenderContext } from '../../../contexts/RenderContext.jsx';

Modal.setAppElement('#root');
// Adicionar condição de não permitir clicar fora dos botões quando abrir o modal
function ModalLimpar(){

    const {limparIsOpen, closeModal} = useContext(RenderContext)
    const {limparDados, excluirRegistro} = useContext(CrudContext)

    function limpar(){
        limparDados()

        setTimeout(() => {
            closeModal('limpar')
        }, 100)
    }

    return(
        <Modal
            isOpen={limparIsOpen} // Verificar se o modal está visível ou não
            onRequestClose={closeModal} // Requisição de fechar o modal
            contentLabel='Exemplo'
            overlayClassName={styles.modalOverlay} // Estilizar o Background do Modal
            className={styles.modalContent} // Estilizar o container do modal
            shouldCloseOnOverlayClick={false} // Impede o fechamento ao clicar fora
        >
            <p>Deseja realmente limpar os campos preenchidos acima?</p>

            <div className={styles.boxButtons}>
                <Button funcao={() => closeModal('limpar')} tipo='container' cor='azul'>
                    Continuar Editando
                </Button>

                <Button funcao={limpar} tipo='container' cor='vinho'>
                    Sim, limpar
                </Button>
            </div>
            
        </Modal>
    )
}

function ModalCancelar(){

    const {cancelarIsOpen, closeModal} = useContext(RenderContext)
    const {cancelarSolicitacao} = useContext(CrudContext)

    function cancelar(){
        cancelarSolicitacao()

        setTimeout(() => {
            closeModal('cancelar')
        }, 100)
    }

    return(
        <Modal
            isOpen={cancelarIsOpen} // Verificar se o modal está visível ou não
            onRequestClose={closeModal} // Requisição de fechar o modal
            contentLabel='Exemplo'
            overlayClassName={styles.modalOverlay} // Estilizar o Background do Modal
            className={styles.modalContent} // Estilizar o container do modal
            shouldCloseOnOverlayClick={false} // Impede o fechamento ao clicar fora
        >
            <p>Tem certeza que deseja cancelar a solicitação?</p>

            <div className={styles.boxButtons}>
                <Button funcao={() => closeModal('cancelar')} tipo='container' cor='azul'>
                    Continuar Editando
                </Button>

                <Button funcao={cancelar} tipo='container' cor='vinho'>
                    Sim, cancelar
                </Button>
            </div>
            
        </Modal>
    )
}

function ModalExcluir(){

    const {excluirIsOpen, closeModal} = useContext(RenderContext)
    const {excluirRegistro} = useContext(CrudContext)

    function excluir(){
        excluirRegistro()

        setTimeout(() => {
            closeModal('excluir')
        }, 100)
    }

    return(
        <Modal
            isOpen={excluirIsOpen} // Verificar se o modal está visível ou não
            onRequestClose={closeModal} // Requisição de fechar o modal
            contentLabel='Exemplo'
            overlayClassName={styles.modalOverlay} // Estilizar o Background do Modal
            className={styles.modalContent} // Estilizar o container do modal
            shouldCloseOnOverlayClick={false} // Impede o fechamento ao clicar fora
        >
            <p>Deseja realmente excluir os dados dessa linha?</p>

            <div className={styles.boxButtons}>
                <Button funcao={() => closeModal('excluir')} tipo='container' cor='azul'>
                    Continuar Editando
                </Button>

                <Button funcao={excluir} tipo='container' cor='vinho'>
                    Sim, excluir
                </Button>
            </div>
            
        </Modal>
    )
}




export { ModalCancelar, ModalExcluir, ModalLimpar };

