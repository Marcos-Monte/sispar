// Import de Dependencia de Context
import { createContext, useEffect, useState } from "react";

import api from '../services/Api.jsx';

// Intancia o 'Contexto' com um Objeto Vazio como Padrão
const CrudContext = createContext({})

function CrudProvider(props){

    useEffect(()=>{
        localStorage.setItem('solicitacoes', JSON.stringify([]))
    }, [])

    const cadastro = JSON.parse(localStorage.getItem('user'))
    const solicitacoes = JSON.parse(localStorage.getItem('solicitacoes'));

    // Gerencia o Estado do Array de Objetos importado para a aplicação (Esse 'registros' que irá ser renderizado na tela e não os valores do BD)
    const [registros, setRegistros] = useState([])
    const [dados, setDados] = useState({
        colaborador:'',
        empresa: '',
        num_prestacao: 0,
        descricao: '',
        data: '',
        tipo_reembolso: 'Selec.',
        centro_custo: 'Selec.',
        ordem_interna: '',
        divisao: '',
        pep: '',
        moeda: 'Selec.',
        distancia_km: 0,
        valor_km: 0,
        valor_faturado: 0,
        despesa: 0,
        id_colaborador: cadastro.id,
    })
    
    // Assim que montar a aplicação, executar a função indicada
    useEffect(() => {
        buscarReembolsos()
    }, [])

    async function buscarReembolsos() {
        const response = await api.get('/reembolso/reembolsos')
        // console.log(response.data.length)

        if(response.data.length !== undefined){
            setRegistros(response.data)
        }
        
    }

    function handleChange(event){
        // console.log(event.target.name, event.target.value);
        // Settando as propriedades dentro da variavel 'dados'. Recebe 'chave':'valor'
        setDados({
            ...dados, [event.target.name]: event.target.value
        })
        
    }

    // Função de Salvamento (clique no Botão)
    async function handleSalvar(obj){
        console.log(obj)

        try {
            // const solicitacoes = JSON.parse(localStorage.getItem('solicitacoes'));

            localStorage.setItem('solicitacoes', JSON.stringify([...solicitacoes, dados]))
            limparDados()
        } catch (error) {
            console.error('Não foi possível salvar a solicitação de reembolso: ', error)
        }

    }

    function limparDados(){
        // Limpando Campos do Formulário
        setDados(prevState => ({
            ...prevState,
            colaborador:'',
            empresa: '',
            num_prestacao: 0,
            descricao: '',
            data: '',
            tipo_reembolso: 'Selec.',
            centro_custo: 'Selec.',
            ordem_interna: '',
            divisao: '',
            pep: '',
            moeda: 'Selec.',
            distancia_km: 0,
            valor_km: 0,
            valor_faturado: 0,
            despesa: 0,
            id_colaborador: cadastro.id,
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
        localStorage.setItem('solicitacoes', JSON.stringify([]))
    }

    async function enviarSolicitacao(){
        // Evita que o botão tenha o comportamento 'default'
        // event.preventDefault();

        try {
            //  // Validação dos campos
            // if (!dados.colab || !dados.empresa || !dados.prest || !dados.descricao || !dados.data) {
            //     alert('Por favor, preencha todos os campos obrigatórios!');
            //     return; 
            // }
            // const solicitacoes = JSON.parse(localStorage.getItem('solicitacoes'));

            await api.post('/reembolso/solicitacao', solicitacoes)
            alert("Solicitações de reembolso cadastradas com sucesso!");
            setDados({})
            buscarReembolsos();
            localStorage.setItem('solicitacoes', JSON.stringify([]))

        } catch (error) {
            console.error('Não foi possível efetuar a requisição: ', error.response.data.erro)
            alert(`Erro ao cadastrar reembolso: ${error.response.data?.erro}`);
        }
    }
    
    return (
        // Tag que envolve o componente em comum (Home)
        <CrudContext.Provider value={{
            cadastro,
            solicitacoes,

            registros,
            dados,

            setDados,
            handleChange,
            handleSalvar,
            excluirRegistro,
            buscarReembolsos,

            enviarSolicitacao,
            cancelarSolicitacao,

            limparDados,
        }}>
            {props.children}
        </CrudContext.Provider>
    )

}

export { CrudContext, CrudProvider };

