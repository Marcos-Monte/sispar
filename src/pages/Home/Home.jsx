// Import de Hook de Estado
import { useState } from "react";

// Import de arquivo de estilização
import styles from './Home.module.scss';

// Import de Componentes
import Analises from '../../components/sections/Analises/Analises.jsx';
import Dashboard from "../../components/sections/Dashboard/Dashboard";
import Historico from "../../components/sections/Historico/Historico.jsx";
import Reembolso from "../../components/sections/Reembolso/Reembolso";
import Caminho from "../../components/template/Caminho/Caminho";
import Header from "../../components/template/Header/Header";

export default function Inicio(){

    // Estrutura gerenciamento de Estado. Define qual componente será renderizado no centro da aplicação
    const [componente, setComponente] = useState('Dashboard')

    // Função responsável por verificar qual o valor armazenado na variavel 'componente' e renderizar o Componente baseado nesse valor
    function alterarComponente(componente){
        if(componente === 'Reembolso'){
            return <Reembolso />
        } else if (componente === 'Dashboard'){
            return <Dashboard />
        }  else if (componente === 'Analises'){
            return <Analises />
        } else if (componente === 'Historico'){
            return <Historico />
        } 
    }

    return(
        <div className={styles.container}>
            {/* Enviando o 'setter' via 'props' para o Header que será vinculado a uma função anonima e quando chegar no Button a um evento de click */}
            <Header alterarComponente={setComponente}/>

            <main>
                <Caminho caminho={componente}/>
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