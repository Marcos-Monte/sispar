import { useContext } from 'react';

import styles from './Home.module.scss';

import Header from '@/components/template/Header/Header.jsx';
import { Modal } from '@/components/users/Modal/Modal.jsx';

import { CrudContext, CrudProvider } from '../../contexts/CrudContext.jsx';
import { RenderContext } from '../../contexts/RenderContext.jsx';

function HomeInterno() {
    const { componente } = useContext(RenderContext);
    const { isModalOpen, fecharModal, onModalConfirm, modalType } = useContext(CrudContext);

    return (
        <div className={styles.container}>
            
            <Modal isOpen={isModalOpen} onClose={fecharModal} onConfirm={onModalConfirm}>
                {modalType === 'logout' && (
                    <>
                        <h2>Fazer Logout</h2>
                        <p>Tem certeza de que deseja sair da aplicação?</p>
                    </>
                )}
                {modalType === 'excluir' && (
                    <>
                        <h2>Confirmar Exclusão</h2>
                        <p>Deseja realmente excluir este item?</p>
                    </>
                )}

                {modalType === 'editar' && (
                    <>
                        <h2>Aviso: </h2>
                        <p>Ao confirmar a edição o item será retirado da lista de solicitações de reembolsso. Para que retorne, basta salvar novamente.</p>
                        <p>Deseja editar este item?</p>
                    </>
                )}
                
                {modalType === 'enviar' && (
                    <>
                        <h2>Confirmar Envio de Solicitações</h2>
                        <p>Deseja realmente enviar essas solicitações para análise? </p>
                    </>
                )}
                {modalType === 'cancelar' && (
                    <>
                        <h2>Confirmar Exclusão</h2>
                        <p>Deseja realmente as cancelar o envio das solicitações de reembolso?</p>
                    </>
                )}
                
            </Modal>

            <Header />
            <main>{componente}</main>
        </div>
    );
}

export default function Home(){
    return (
        <CrudProvider>
            <HomeInterno />
        </CrudProvider>
    )
}
