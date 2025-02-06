// Import de Hook de Estado
import { useState } from "react";
// Import de Componentes
import Header from "../../components/template/Header/Header";
// Import de arquivo de estilização
import styles from './Home.module.scss';

// Componentes
import Dashboard from "../../components/template/Dashboard/Dashboard";
import Opcional1 from "../../components/template/Opcional1/Opcional1";
import Opcional2 from "../../components/template/Opcional2/Opcional2";
import Reembolso from "../../components/template/Reembolso/Reembolso";


export default function Inicio(){

    // Estrutura gerenciamento de Estado. Define qual componente será renderizado no centro da aplicação
    const [componente, setComponente] = useState('Dashboard')

    // Função responsável por verificar qual o valor armazenado na variavel 'componente' e renderizar o Componente baseado nesse valor
    function alterarComponente(componente){
        if(componente === 'Reembolso'){
            return <Reembolso />
        } else if (componente === 'Dashboard'){
            return <Dashboard />
        }  else if (componente === 'Opcional1'){
            return <Opcional1 />
        } else if (componente === 'Opcional2'){
            return <Opcional2 />
        } 
    }

    return(
        <div className={styles.container}>
            {/* Enviando o 'setter' via 'props' para o Header que será vinculado a uma função anonima e quando chegar no Button a um evento de click */}
            <Header alterarComponente={setComponente}/>

            <main>
                {/* Função que retorn o componente renderizado mediante clique do Usuário */}
                {alterarComponente(componente)}
            </main>

        </div>
    )
}

// Lógica de Gerenciamento de Estado:
// Home -> Passa via 'props' o 'setter' que recebe o valor da variável 'componente'
// Header -> Recebe o 'setter' e repassa ele via 'props' para o componente 'Button', dentro de uma estrutura de função anônima: props={() => setter('valor')}
// Button -> Recebe de 'Header' via 'props' a função anônima e atribui a um evento de 'click'