import { createContext, useEffect, useState } from "react";
import api from '../services/Api.jsx';
import { getApiError } from "../services/utils.jsx";

import { toast } from "react-toastify";

const CrudContext = createContext({});

function CrudProvider(props) {
    // Usuário logado recuperado do localStorage
    const cadastro = JSON.parse(localStorage.getItem('user'));

    const [registros, setRegistros] = useState([]);
    const [colaboradores, setColaboradores] = useState([]);

    const [dados, setDados] = useState({
        colaborador: '',
        empresa: '',
        descricao: '',
        data: '',
        tipo_reembolso: '',
        centro_custo: '',
        ordem_interna: '',
        divisao: '',
        pep: '',
        moeda: '',
        distancia_km: '',
        valor_km: '',
        valor_faturado: '',
        despesa: '',
        id_colaborador: cadastro.id,
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState(null);
    const [onModalConfirm, setOnModalConfirm] = useState(() => () => {});

    let solicitacoes = [];

    useEffect(() => {
        buscarReembolsos();
        buscarColaboradores();

        const item = localStorage.getItem('solicitacoes');
        try {
            const solicitacoesExistentes = item ? JSON.parse(item) : null;

            if (!Array.isArray(solicitacoesExistentes)) {
                localStorage.setItem('solicitacoes', JSON.stringify([]));
            }
        } catch (e) {
            console.warn("Erro ao interpretar 'solicitacoes' no localStorage. Reinicializando...", e);
            localStorage.setItem('solicitacoes', JSON.stringify([]));
        }
    }, []);

    // Recupera solicitações armazenadas localmente
    try {
        const item = localStorage.getItem('solicitacoes');
        solicitacoes = item ? JSON.parse(item) : [];
    } catch (e) {
        console.warn("Erro ao carregar 'solicitacoes' do localStorage.", e);
    }

    async function buscarReembolsos() {
        try {
            const response = await api.get('/reembolso/reembolsos');

            if (response.data.length !== undefined) {
                setRegistros(response.data);
            }
        } catch (error) {
            const erro = getApiError(error);
            console.error('Erro ao buscar reembolsos:', erro || error);
            toast.error(erro || error);
        }
    }

    async function buscarColaboradores() {
        try {
            const response = await api.get('/colaborador/todos-colaboradores');

            if (response.data.length !== undefined) {
                const listaColaboradores = response.data.map(
                    (colaborador) => `ID:${colaborador.id} - ${colaborador.nome}`
                )
                setColaboradores(listaColaboradores);
            }
        } catch (error) {
            const erro = getApiError(error);
            console.error('Erro ao buscar Colaboradores:', erro || error);
            toast.error(erro || error);
        }
    }

    function handleChange(event) {
        setDados({
            ...dados,
            [event.target.name]: event.target.value,
        });
    }

    async function getCotacao(moeda){
        const simbolo = `${moeda}BRL`
        try {
            if(moeda === 'BRL') {
                return 1
            }
            const response = await api.get(`https://economia.awesomeapi.com.br/json/last/${moeda}-BRL`)
            const data = response.data

            if(!data[simbolo]){
                console.warn('Conversão não encontrada');
                return
            }

            const cotacao = data[simbolo].bid

            return cotacao
        } catch (error) {
            const erro = getApiError(error);
            console.error( erro || error);
            toast.error(erro || error);
        }
        
    } 

    async function handleSalvar(obj) {
        const obrigatorios = ['colaborador', 'empresa', 'tipo_reembolso', 'centro_custo', 'moeda', 'valor_faturado', 'divisao', 'ordem_interna'];

        try {

            for (let campo of obrigatorios) {
                if (!obj[campo]) {
                    toast.warn(`Por favor, preencha o campo obrigatório: ${campo.replace('_', ' ')}`);
                    return;
                }
            }

            if(!obj.data) {
                const data = new Date();
                console.log(data)
                obj.data = data.toISOString().replace('Z', '');
            }

            const cotacao = await getCotacao(obj.moeda)

            if (!cotacao) {
                toast.error('Não foi possível obter a cotação. Verifique a moeda informada.');
                return; 
            }

            const novoObj = {
                ...obj,
                valor_faturado: (obj.valor_faturado * cotacao).toFixed(2)
            }

            localStorage.setItem('solicitacoes', JSON.stringify([...solicitacoes, novoObj]));
            limparDados();
        } catch (error) {
            console.error('Erro ao salvar a solicitação:', error);
        }
    }

    function limparDados() {
        setDados(prevState => ({
            ...prevState,
            colaborador: '',
            empresa: '',
            descricao: '',
            data: '',
            tipo_reembolso: '',
            centro_custo: '',
            ordem_interna: '',
            divisao: '',
            pep: '',
            moeda: '',
            distancia_km: '',
            valor_km: '',
            valor_faturado: '',
            despesa: '',
            id_colaborador: cadastro.id,
        }));
    }

    async function excluirRegistro(obj) {
        try {
            if (!obj) {
                console.warn('Nenhuma solicitação válida selecionada para exclusão.');
                return;
            }

            const index = solicitacoes.findIndex(item => item === obj);

            if(index === -1){
                console.warn('Objeto não encontrado na lista.')
            }

            const solicitacoesFiltradas = solicitacoes.filter((_, i) => i !== index);
            toast.success("Reembolso excluído!");
            localStorage.setItem('solicitacoes', JSON.stringify(solicitacoesFiltradas));
        } catch (error) {
            console.error('Erro ao excluir a solicitação:', error);
        } finally {
            setIsModalOpen(false);
        }
    }

    function cancelarSolicitacao() {
        localStorage.setItem('solicitacoes', JSON.stringify([]));
        limparDados();
        setIsModalOpen(false);
    }

    async function enviarSolicitacao() {
        event.preventDefault();

        try {
            await api.post('/reembolso/solicitacao', solicitacoes);
            toast.success("Solicitações enviadas com sucesso!");
            setDados({});
            buscarReembolsos();
            localStorage.setItem('solicitacoes', JSON.stringify([]));
        } catch (error) {
            const erro = getApiError(error);
            console.error('Erro ao enviar as solicitações:', erro || error);
            toast.error(erro || error);
        } finally {
            setIsModalOpen(false);
        }
    }

    async function editarSolicitacao(obj) {
        try {
            if (!obj) {
                console.warn('Nenhuma solicitação válida selecionada para edição.');
                return;
            }

            const index = solicitacoes.findIndex(item => item === obj);

            if(index === 1){
                console.log('Solicitação não encontrada na lista. Atualize o navegador!')
            }

            const solicitacoesFiltradas = solicitacoes.filter((_, i) => i !== index);
            const cotacao = await getCotacao(obj.moeda)

            if (!cotacao) {
                toast.error('Não foi possível obter a cotação. Verifique a moeda informada.');
                return; 
            }

            const objEditavel = {
                ...obj,
                valor_faturado: (obj.valor_faturado / cotacao).toFixed(2)
            }
            
            setDados(objEditavel);
            localStorage.setItem('solicitacoes', JSON.stringify(solicitacoesFiltradas));
        } catch (error) {
            console.error('Erro ao editar a solicitação:', error);
        } finally {
            setIsModalOpen(false);
        }
    }

    function calcularFaturamento(array, nomeCampo) {
        try {
            const soma = array.reduce((total, item) => total + (parseFloat(item[nomeCampo]) || 0), 0);

            return new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(soma);
        } catch (error) {
            console.error('Erro no cálculo de faturamento:', error);
            return 'Erro';
        }
    }

    function contadorStatus(nomeCampo) {
        try {
            let soma;
            if (!nomeCampo) {
                soma = registros.length;
            } else {
                soma = registros.reduce((contador, item) => {
                    const statusItem = item.status?.trim().toLowerCase();
                    const statusFiltro = nomeCampo.trim().toLowerCase();
                    return statusItem === statusFiltro ? contador + 1 : contador;
                }, 0);
            }

            return soma || 0;
        } catch (error) {
            console.error('Erro ao contar status:', error);
            return 0;
        }
    }

    function abrirModal(tipo, confirmacao) {
        setModalType(tipo);
        setOnModalConfirm(() => confirmacao);
        setIsModalOpen(true);
    }

    function fecharModal() {
        setIsModalOpen(false);
        setModalType(null);
        setOnModalConfirm(() => () => {});
    }

    return (
        <CrudContext.Provider value={{
            cadastro,
            solicitacoes,

            registros,
            colaboradores,
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

            isModalOpen,
            fecharModal,
            abrirModal,
            modalType,
            onModalConfirm,
        }}>

            {props.children}
            
        </CrudContext.Provider>
    );
}

export { CrudContext, CrudProvider };

