// Import de Dependencia de Context
import { createContext, useEffect, useState } from "react";

import api from '../services/Api.jsx';

// Intancia o 'Contexto' com um Objeto Vazio como Padrão
const CrudContext = createContext({})

function CrudProvider(props){
    // Assim que montar a aplicação, executar a função indicada
    useEffect(()=>{
        buscarReembolsos()
        const item = localStorage.getItem('solicitacoes');

        try {
            const solicitacoesExistentes = item ? JSON.parse(item) : null;
    
            if (!Array.isArray(solicitacoesExistentes)) {
                localStorage.setItem('solicitacoes', JSON.stringify([]));
            }
        } catch (e) {
            console.warn("Erro ao fazer parse do localStorage 'solicitacoes'. Reinicializando...", e);
            localStorage.setItem('solicitacoes', JSON.stringify([]));
        }

    }, [])

    const cadastro = JSON.parse(localStorage.getItem('user'))
    let solicitacoes = []
    try {
        const item = localStorage.getItem('solicitacoes');
        solicitacoes = item ? JSON.parse(item) : [];
    } catch (e) {
        console.warn("Erro ao fazer parse do localStorage 'solicitacoes'.", e);
    }
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
    

    async function buscarReembolsos() {
        const response = await api.get('/reembolso/reembolsos')

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

        try {
              // Validação dos campos
            if (!dados.colaborador || !dados.empresa || !dados.num_prestacao || !dados.data || !dados.tipo_reembolso || !dados.centro_custo || !dados.moeda || !dados.valor_faturado) {
                alert('Por favor, preencha todos os campos obrigatórios!');
                return; 
            }
            localStorage.setItem('solicitacoes', JSON.stringify([...solicitacoes, obj]))
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

    async function excluirRegistro(obj){
        try {
            if (!obj || !obj.num_prestacao) {
                console.warn('Nenhum item selecionado para exclusão.');
                return;
            }

            const solicitacoesFiltradas = solicitacoes.filter(item => obj.num_prestacao
                !== item.num_prestacao
            )
            alert("Reembolso excluído!");
            localStorage.setItem('solicitacoes', JSON.stringify(solicitacoesFiltradas));
        } catch (error) {
            console.error('Não foi possível excluir a solicitação de reembolso: ', error)
        }
        

    }

    function cancelarSolicitacao(){
        localStorage.setItem('solicitacoes', JSON.stringify([]))
        limparDados()
    }

    async function enviarSolicitacao(){
        // Evita que o botão tenha o comportamento 'default'
        event.preventDefault();

        try {

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

    function editarSolicitacao(obj){
        try {

            const solicitacoesFiltradas = solicitacoes.filter(
                (item) => item.num_prestacao !== obj.num_prestacao
            )

            setDados(obj)

            localStorage.setItem('solicitacoes', JSON.stringify(solicitacoesFiltradas));
        } catch (error) {
            console.error('Não foi possível iniciar edição desse registro: ', error)
        }
    }

    function calcularFaturamento(array, nomeCampo) {
        try {
            const soma = array.reduce((total, item) => {
                return total + (parseFloat(item[nomeCampo]) || 0);
            }, 0);
    
            return new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(soma);

        } catch (error) {
            console.error('Não foi possível executar o cálculo: ', error);
            return 'Erro';
        }
    }

    function contadorStatus(nomeCampo){
        
        try {
            let soma;
            if(!nomeCampo){
                soma = registros.length;
            } else {
                soma = registros.reduce((contador, item) => {
                    console.log(item.status)
                    if(item.status === nomeCampo){
                        return contador + 1;
                    }
    
                }, 0)
            }
            
            return soma
            
        } catch (error) {
            console.error('Não foi possível contabilizar os status: ', error)
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
            editarSolicitacao,
            calcularFaturamento,
            contadorStatus,
        }}>
            {props.children}
        </CrudContext.Provider>
    )

}

export { CrudContext, CrudProvider };

