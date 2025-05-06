// Import de Dependencia de Context
import { createContext, useEffect, useState } from "react";

import api from '../services/Api.jsx';

// Intancia o 'Contexto' com um Objeto Vazio como Padrão
const CrudContext = createContext({})

function CrudProvider(props){

    // Gerencia o Estado do Array de Objetos importado para a aplicação (Esse 'registros' que irá ser renderizado na tela e não os valores do BD)
    const [registros, setRegistros] = useState([])
    const [dados, setDados] = useState({})
    
    useEffect(() => {

        buscarReembolsos()

    }, [])

     // Gerenciamento de Estado do Objeto onde os dados serão compilados
    // const [dados, setDados] = useState({
    //     colab:'',
    //     empresa: '',
    //     prest: '',
    //     descricao: '',
    //     data: '',
    //     tipo: 'Selec.',
    //     ctrCusto: 'Selec.',
    //     ordInt: '',
    //     pep: '',
    //     div: '',
    //     distKm: '',
    //     moeda: 'Selec.',
    //     valKm: '',
    //     despesa: '',
    //     valFaturado: '',
    // })

    async function buscarReembolsos() {
        const response = await api.get('/reembolso/reembolsos')
        console.log(response.data)
        setRegistros(response.data)
    }

    function handleChange(event){
        // console.log(event.target.name, event.target.value);
        // Settando as propriedades dentro da variavel 'dados'. Recebe 'chave':'valor'
        setDados({
            ...dados, [event.target.name]: event.target.value
        })
        
    }

    // Função de Salvamento (clique no Botão)
    async function handleSalvar(event){
        // Evita que o botão tenha o comportamento 'default'
        event.preventDefault();

        try {
             // Validação dos campos
            if (!dados.colab || !dados.empresa || !dados.prest || !dados.descricao || !dados.data) {
                alert('Por favor, preencha todos os campos obrigatórios!');
                return; 
            }

            await api.post('/reembolso/solicitacao', dados)
            alert("Reembolso cadastrado com sucesso!");
            setDados({})
            buscarReembolsos();

        } catch (error) {
            console.error('Não foi possível efetuar a requisição: ', error)
        }

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
            tipo: 'Selec.',
            ctrCusto: 'Selec.',
            ordInt: '',
            pep: '',
            div: '',
            distKm: '',
            moeda: 'Selec.',
            valKm: '',
            despesa: '',
            valFaturado: '',
        }))
        
    }

    async function excluirRegistro(item){
        try {
            if (!item || !item.id) {
                console.warn('Nenhum item selecionado para exclusão.');
                return;
            }

            await api.delete(`/reembolso/deletar/${item.id}`);
            alert("Reembolso excluído!");
            buscarReembolsos();
        } catch (error) {
            console.error('Não foi possível excluir a solicitação de reembolso: ', error)
        }
        

    }

    function cancelarSolicitacao(){
        console.log('solicitação cancelada')
        setRegistros([])
    }

    async function enviarSolicitacao(){
        try { // O que queremos 'tentar' fazer
            const response = await api.post('/refunds/new', registros) // Dois argumentos: rota, objetoEnviado
            console.log('Resposta da API: ', response)
            alert('Reembolso solicitado com sucesso!')
            setFoiEnviado(true)

        } catch (error) { // Se algo der errado no 'try' executar esse bloco
            console.error('Não foi enviar os registros: ', error)
        }
    }
    
    return (
        // Tag que envolve o componente em comum (Home)
        <CrudContext.Provider value={{
            registros,
            dados,
            setDados,
            handleChange,
            handleSalvar,
            excluirRegistro,
            buscarReembolsos,
        }}>
            {props.children}
        </CrudContext.Provider>
    )

}

export { CrudContext, CrudProvider };

