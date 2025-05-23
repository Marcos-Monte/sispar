import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Analises from '@/components/sections/Analises/Analises.jsx';
import Dashboard from '@/components/sections/Dashboard/Dashboard.jsx';
import Historico from '@/components/sections/Historico/Historico.jsx';
import Reembolso from '@/components/sections/Reembolso/Reembolso.jsx';

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

    const [componente, setComponente] = useState(<Dashboard />) // Componente Renderizado Inicialmente será o Dashboard
    const [statusHeader, setStatusHeader] = useState('fechado') 
    const [cancelarIsOpen, setCancelarIsOpen] = useState(false);
    const [limparIsOpen, setLimparIsOpen] = useState(false);
    const [excluirIsOpen, setExcluirIsOpen] = useState(false);

    const [itemSelecionado, setItemSelecionado] = useState(null);

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

        closeHeader('fechado')

    }

    function openHeader(){
        return statusHeader === 'fechado' ? setStatusHeader('aberto') : setStatusHeader('fechado')
    }

    function closeHeader(){
        setStatusHeader('fechado')
    }


    return(
        <RenderContext.Provider value={{
            componente,
            alterarRender,
            statusHeader,
            openHeader,

            limparIsOpen,
            cancelarIsOpen,
            excluirIsOpen,

            itemSelecionado, // Item que será excluído
        }}>

            {props.children}

        </RenderContext.Provider>
    )
}

export { RenderContext, RenderProvider };

