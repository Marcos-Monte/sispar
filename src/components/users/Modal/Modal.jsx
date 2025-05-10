import styles from './Modal.module.scss'; // se quiser aplicar estilos próprios

import { Button } from '@/components/users/Buttons/Button.jsx';
import Logo from '../../../assets/Login/logo-ws.png';

export function Modal({ isOpen, onClose, onConfirm, children }) {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>

            <div className={styles.modalContent}>
                <div className={styles.modalHeader}>
                    <img src={Logo} alt="" />
                    <i class="bi bi-x-circle" onClick={onClose}></i>
                </div>

                <div className={styles.modalBody}>
                    {children} {/* Aqui entra conteúdo dinâmico */}
                </div>

                <div className={styles.modalFooter}>

                    <Button
                        tipo='container'
                        cor='cinza'
                        // rota='/'
                        funcao={onClose}
                    >
                        Cancelar
                    </Button>
                    <Button
                        tipo='container'
                        cor='azul'
                        // rota='/'
                        funcao={onConfirm}
                    >
                        Confirmar
                    </Button>
                </div>
            </div>
        </div>
    );
}
