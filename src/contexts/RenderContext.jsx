// Import de Dependencia de Context
import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Import dos Componentes que serão renderizados nas aplicações 'filho' da envolvida por RenderProvider
import Analises from '@/components/sections/Analises/Analises.jsx';
import Dashboard from '@/components/sections/Dashboard/Dashboard.jsx';
import Historico from '@/components/sections/Historico/Historico.jsx';
import Reembolso from '@/components/sections/Reembolso/Reembolso.jsx';

// Intancia o 'Contexto' com um Objeto Vazio como Padrão
const RenderContext = createContext({})

// Componente que irá envolver o Componente Principal ou o Em comum entre os elementos que precisam se comunicar na aplicação
function RenderProvider(props){

    const location = useLocation(); // Obtém a URL atual da aplicação.

    // **Reseta o estado `componente` para `<Dashboard />` sempre que o usuário sair da HOME**
    useEffect(() => {
        if (location.pathname !== "/home") { // Se a URL NÃO for a Home ("/"), reseta para Dashboard
            setComponente(<Dashboard />);
        }
    }, [location.pathname]); // Executa sempre que a URL mudar

    // Variaveis de Estado
    const [componente, setComponente] = useState(<Dashboard />) // Componente Renderizado Inicialmente será o Dashboard
    const [statusHeader, setStatusHeader] = useState('fechado') // Header iniciará a aplicação 'fechado'
    // Variavel de estado que indica abertura e fechamento de Modal
    const [modalIsOpen, setIsOpen] = useState(false);

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
            default:
                setComponente(<Dashboard />); // Garante um fallback
        }

    }

    // Função que será utilizada no Header para alternar entre versão 'aberto e fechado'
    function openHeader(){
        return statusHeader === 'aberto'? setStatusHeader('fechado'): setStatusHeader('aberto')
    }

    // Funções que atribuem a 'abertura' e 'fechamento' do Modal
    function openModal(){
        console.log('abriu')
        setIsOpen(true);
    }
    
    function closeModal(){
        console.log('fechou')
        setIsOpen(false);
    }

    return(
        // O value é um 'objeto' por padrão que recebe os valores, funções e afins, necessários
        <RenderContext.Provider value={{
            componente,
            alterarRender,
            statusHeader,
            openHeader,

            // Contextos de Modal
            modalIsOpen,
            openModal,
            closeModal,
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
