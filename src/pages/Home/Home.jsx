// Import de Componentes
import { useState } from "react";
import Header from "../../components/template/Header/Header";
// Import de arquivo de estilização
import styles from './Home.module.scss';

// Componentes
import Dashboard from "../../components/template/Dashboard/Dashboard";
import Opcional1 from "../../components/template/Opcional1/Opcional1";
import Opcional2 from "../../components/template/Opcional2/Opcional2";
import Reembolso from "../../components/template/Reembolso/Reembolso";


export default function Inicio(){

    const [componente, setComponente] = useState('Dashboard')

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

            <Header alterarComponente={setComponente}/>

            <main>
                {alterarComponente(componente)}
            </main>

        </div>
    )
}