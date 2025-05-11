// Importação de dependências React e serviços
import { createContext, useEffect, useState } from "react";
import api from '../services/Api.jsx';
import { getApiError } from "../services/utils.jsx";

// Criação do contexto com valor inicial vazio
const CrudContext = createContext({});

function CrudProvider(props) {
    // Usuário logado recuperado do localStorage
    const cadastro = JSON.parse(localStorage.getItem('user'));

    // Estado principal para renderização de registros da API
    const [registros, setRegistros] = useState([]);

    // Estado para armazenar os dados do formulário
    const [dados, setDados] = useState({
        colaborador: '',
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
    });

    // Estados relacionados ao controle de modais
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState(null);
    const [onModalConfirm, setOnModalConfirm] = useState(() => () => {});

    // Array que armazena temporariamente as solicitações de reembolso
    let solicitacoes = [];

    // useEffect para buscar reembolsos ao carregar a aplicação
    useEffect(() => {
        buscarReembolsos();

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

    // Busca os registros de reembolso da API
    async function buscarReembolsos() {
        try {
            const response = await api.get('/reembolso/reembolsos');

            if (response.data.length !== undefined) {
                setRegistros(response.data);
            }
        } catch (error) {
            const erro = getApiError(error);
            console.error('Erro ao buscar reembolsos:', erro || error);
            alert(erro || error);
        }
    }

    // Atualiza estado 'dados' com o valor digitado no formulário
    function handleChange(event) {
        setDados({
            ...dados,
            [event.target.name]: event.target.value,
        });
    }

    // Salva uma nova solicitação no localStorage
    async function handleSalvar(obj) {
        try {
            // Validação de campos obrigatórios
            if (!dados.colaborador || !dados.empresa || !dados.num_prestacao || !dados.data || !dados.tipo_reembolso || !dados.centro_custo || !dados.moeda || !dados.valor_faturado) {
                alert('Por favor, preencha todos os campos obrigatórios!');
                return;
            }

            localStorage.setItem('solicitacoes', JSON.stringify([...solicitacoes, obj]));
            limparDados();
        } catch (error) {
            console.error('Erro ao salvar a solicitação:', error);
        }
    }

    // Reseta os campos do formulário para o estado inicial
    function limparDados() {
        setDados(prevState => ({
            ...prevState,
            colaborador: '',
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
        }));
    }

    // Exclui uma solicitação do localStorage
    async function excluirRegistro(obj) {
        try {
            if (!obj || !obj.num_prestacao) {
                console.warn('Nenhuma solicitação válida selecionada para exclusão.');
                return;
            }

            const solicitacoesFiltradas = solicitacoes.filter(item => item.num_prestacao !== obj.num_prestacao);
            alert("Reembolso excluído!");
            localStorage.setItem('solicitacoes', JSON.stringify(solicitacoesFiltradas));
        } catch (error) {
            console.error('Erro ao excluir a solicitação:', error);
        } finally {
            setIsModalOpen(false);
        }
    }

    // Cancela todas as solicitações e limpa o formulário
    function cancelarSolicitacao() {
        localStorage.setItem('solicitacoes', JSON.stringify([]));
        limparDados();
        setIsModalOpen(false);
    }

    // Envia as solicitações de reembolso para a API
    async function enviarSolicitacao() {
        event.preventDefault();

        try {
            await api.post('/reembolso/solicitacao', solicitacoes);
            alert("Solicitações enviadas com sucesso!");
            setDados({});
            buscarReembolsos();
            localStorage.setItem('solicitacoes', JSON.stringify([]));
        } catch (error) {
            const erro = getApiError(error);
            console.error('Erro ao enviar as solicitações:', erro || error);
            alert(erro || error);
        } finally {
            setIsModalOpen(false);
        }
    }

    // Edita uma solicitação existente, removendo-a da lista e preenchendo o formulário com os dados
    function editarSolicitacao(obj) {
        try {
            const solicitacoesFiltradas = solicitacoes.filter(item => item.num_prestacao !== obj.num_prestacao);
            setDados(obj);
            localStorage.setItem('solicitacoes', JSON.stringify(solicitacoesFiltradas));
        } catch (error) {
            console.error('Erro ao editar a solicitação:', error);
        } finally {
            setIsModalOpen(false);
        }
    }

    // Soma os valores de um campo específico e formata como moeda
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

    // Conta quantos registros possuem um determinado status
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

    // Abre o modal e define o tipo e a função de confirmação
    function abrirModal(tipo, confirmacao) {
        setModalType(tipo);
        setOnModalConfirm(() => confirmacao);
        setIsModalOpen(true);
    }

    // Fecha o modal e limpa os estados relacionados
    function fecharModal() {
        setIsModalOpen(false);
        setModalType(null);
        setOnModalConfirm(() => () => {});
    }

    // Retorno do Provider com todos os dados e funções disponíveis
    return (
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

