// Import de Dependencia de Context
import { createContext, useState } from "react";

// Import dos Componentes que serão renderizados nas aplicações 'filho' da envolvida por RenderProvider
import Analises from '@/components/sections/Analises/Analises.jsx';
import Dashboard from '@/components/sections/Dashboard/Dashboard.jsx';
import Historico from '@/components/sections/Historico/Historico.jsx';
import Reembolso from '@/components/sections/Reembolso/Reembolso.jsx';

// Intancia o 'Contexto' com um Objeto Vazio como Padrão
const RenderContext = createContext({})

// Componente que irá envolver o Componente Principal ou o Em comum entre os elementos que precisam se comunicar na aplicação
function RenderProvider(props){

    // Variaveis de Estado
    const [componente, setComponente] = useState(<Dashboard />) // Componente Renderizado Inicialmente será o Dashboard
    const [statusHeader, setStatusHeader] = useState('fechado') // Header iniciará a aplicação 'fechado'

    // Função que será utilizada em botões e cards na aplicação, para renderizar os componentes indicados
    function alterarRender(texto){

        switch(texto){
            case 'Reembolso':
                setComponente(<Reembolso />)
                break;
            case 'Dashboard':
                setComponente(<Dashboard />)
                break;
            case 'Analises':
                setComponente(<Analises />)
                break;
            case 'Historico':
                setComponente(<Historico />)
                break;
        }

    }

    // Função que será utilizada no Header para alternar entre versão 'aberto e fechado'
    function openHeader(){
        return statusHeader === 'aberto'? setStatusHeader('fechado'): setStatusHeader('aberto')
    }

    return(
        // O value é um 'objeto' por padrão que recebe os valores, funções e afins, necessários
        <RenderContext.Provider value={{
            componente,
            alterarRender,
            statusHeader,
            openHeader,
        }}>

            {/* Elementos Filhos envolvidos pelo Componente.. Estão dentro deste 'contexto' */}
            {props.children}

        </RenderContext.Provider>
    )
}

// Exportando as Funções Construtoras
// - RenderContext: Será importado sempre que um componente for utilizar seus métodos
// - RenderProvider: Será importado, apenas, no componente 'comum' entre os que irão utilizar os métodos
export { RenderContext, RenderProvider };
