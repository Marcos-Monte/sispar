// Import de Dependencia de Context
import { createContext, useEffect, useState } from "react";

// Lista de Registros
import solicitacoesReembolso from '@/data/registros.js';

// Intancia o 'Contexto' com um Objeto Vazio como Padrão
const CrudContext = createContext({})

function CrudProvider(props){

    // Gerencia o Estado do Array de Objetos importado para a aplicação (Esse 'registros' que irá ser renderizado na tela e não os valores do BD)
    const [registros, setRegistros] = useState([])
    
    useEffect(() => {
        setRegistros([...solicitacoesReembolso]);// Garante que ele seja atualizado corretamente
    }, [])

     // Gerenciamento de Estado do Objeto onde os dados serão compilados
    const [dados, setDados] = useState({
        colab:'',
        empresa: '',
        prest: '',
        descricao: '',
        data: '',
        tipo: 'Selecionar',
        ctrCusto: 'Selecionar',
        ordInt: '',
        pep: '',
        div: '',
        distKm: '',
        moeda: '',
        valKm: '',
        despesa: '',
        valFaturado: '',
    })

    function handleChange(event){
        // console.log(event.target.name, event.target.value);
        // Settando as propriedades dentro da variavel 'dados'. Recebe 'chave':'valor'
        setDados({
            ...dados, [event.target.name]: event.target.value
        })
        
    }

    // Função de Salvamento (clique no Botão)
    function handleSalvar(event){
        console.log('Entrou')
        // Evita que o botão tenha o comportamento 'default'
        event.preventDefault();

        // Armazenando novo Registro
        const novoRegistro = {
            // Recebe todos os dados da Variavel de Estado 'dados'
            ...dados,
            // valFaturado: parseFloat(dados.valFaturado || 0), // Tratando propriedades especificas de 'dados'
            // desapesa: parseFloat(dados.despesa || 0), // Tratando propriedades especificas de 'dados'
        };

        console.log('Criou')

        // Atribuindo novo registro ao array de registros 'local'
        setRegistros([...registros, novoRegistro]);

        console.log('Registrou')
        console.log(novoRegistro)

        // Limpando Campos do Formulário
        limparDados()

        console.log('Limpou')
    }

    function limparDados(){
        // Limpando Campos do Formulário
        console.log('limpar')
        setDados(prevState => ({
            ...prevState,
            colab:'',
            empresa: '',
            prest: '',
            descricao: '',
            data: '',
            tipo: 'Selecionar',
            ctrCusto: 'Selecionar',
            ordInt: '',
            pep: '',
            div: '',
            distKm: '',
            moeda: '',
            valKm: '',
            despesa: '',
            valFaturado: '',
        }))
        
    }

    function excluirRegistro(){
        console.log('Registro Excluido')
    }

    function cancelarSolicitacao(){
        console.log('solicitação cancelada')
    }
    
    return (
        // Tag que envolve o componente em comum (Home)
        <CrudContext.Provider value={{
            registros,
            dados,
            handleChange,
            handleSalvar,
            limparDados,
            excluirRegistro,
            cancelarSolicitacao,
        }}>
            {props.children}
        </CrudContext.Provider>
    )

}

export { CrudContext, CrudProvider };
