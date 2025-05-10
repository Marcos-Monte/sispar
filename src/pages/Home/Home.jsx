// Import dependencias React
import { useContext } from 'react';
// Import de arquivo de estilização
import styles from './Home.module.scss';
// Import de Componentes
import Header from '@/components/template/Header/Header.jsx';
import { Modal } from '@/components/users/Modal/Modal.jsx';
// Import de Contexto
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
                
                {modalType === 'enviar' && (
                    <>
                        <h2>Confirmar Envio de Solicitações</h2>
                        <p>Deseja realmente enviar essas solicitações para análise? </p>
                    </>
                )}
                {modalType === 'cancelar' && (
                    <>
                        <h2>Confirmar Exclusão</h2>
                        <p>Deseja realmente as solicitações de reembolso?</p>
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
