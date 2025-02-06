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

export default function Home(){

    // Estrutura gerenciamento de Estado. Define qual componente será renderizado no centro da aplicação
    const [componente, setComponente] = useState('Dashboard')

    // Função responsável por verificar qual o valor armazenado na variavel 'componente' e renderizar o Componente baseado nesse valor
    function alterar(componente){
        if(componente === 'Reembolso'){
            return <Reembolso alterarComponente={setComponente}/>
        } else if (componente === 'Dashboard'){
            return <Dashboard alterarComponente={setComponente} />
        }  else if (componente === 'Analises'){
            return <Analises alterarComponente={setComponente}/>
        } else if (componente === 'Historico'){
            return <Historico alterarComponente={setComponente}/>
        } 
    }

    return(
        <div className={styles.container}>
            {/* Enviando o 'setter' via 'props' para o Header que será vinculado a uma função anonima e quando chegar no Button a um evento de click */}
            <Header alterarComponente={setComponente}/>

            <main>
                <Caminho caminho={componente === 'Dashboard'? null: componente}/>
                {/* Função que retorn o componente renderizado mediante clique do Usuário */}
                {
                    alterar(componente)
                }
            </main>

        </div>
    )
}

// Lógica de Gerenciamento de Estado:
// Home -> Passa via 'props' o 'setter' que recebe o valor da variável 'componente'
// Header e Dashboard-> Recebem o 'setter' e repassa ele via 'props' para os componentes 'Button e Card', dentro de uma estrutura de função anônima: props={() => setter('valor')}
// Button e Card -> Recebem de 'Header e Dashboard' via 'props' a função anônima e atribui a um evento de 'click'