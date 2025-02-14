// Import dependencias React
import { useContext } from 'react';
// Import de arquivo de estilização
import styles from './Home.module.scss';
// Import de Componentes
import Header from '@/components/template/Header/Header.jsx';
// Import de Contexto
import { RenderContext } from '../../contexts/RenderContext.jsx';

import TestModal from '../../components/users/Modal/Modal.jsx';

export default function Home(){
    
    // Importando Variavel de Estado de um Componente de Contexto'. Veio de um Contexto
    const {componente} = useContext(RenderContext)

    return(
    
        <div className={styles.container}>

            <Header />

            <main>
                <TestModal openModal='true' />

                {/* Variavel de Estado, Renderizada no Componente de Contexto */}
                {
                    componente
                }
            </main>

        </div>

    )
}

// Lógica de Gerenciamento de Estado (Antiga):
// Home -> Passa via 'props' o 'setter' que recebe o valor da variável 'componente'
// Header e Dashboard-> Recebem o 'setter' e repassa ele via 'props' para os componentes 'Button e Card', dentro de uma estrutura de função anônima: props={() => setter('valor')}
// Button e Card -> Recebem de 'Header e Dashboard' via 'props' a função anônima e atribui a um evento de 'click'

// Logica de Gerenciamento de Estado (Atual):
// Componente de Contexto envolve o APP da aplicação
// A partir dele, podemos importar todas as Funções e Variaveis de Estado do seu Contexto