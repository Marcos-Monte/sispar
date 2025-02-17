// Import de hooks
import { useContext, useEffect, useState } from 'react';
// Import arquivo de Estilização
import styles from './Reembolso.module.scss';
// Import Componentes
import Caminho from '../../template/Caminho/Caminho';
import { Button } from '../../users/Buttons/Button';
import { Input, Select } from '../../users/Inputs/Input';
import Tabela from '../../users/Tabela/Tabela';
// Import Icones
import IconeApagar from '@/assets/icons/apagar.png';
import IconeCancelar from '@/assets/icons/cancelar.png';
import IconeEnviar from '@/assets/icons/enviar.png';
import IconeHomeGray from '@/assets/icons/home.png';
import IconeSalvar from '@/assets/icons/salvar.png';
import IconeSeta from '@/assets/icons/seta.png';
// Import Dados
import { controleCustos, tiposDespesa } from '@/data/opcoes.js';
import solicitacoesReembolso from '@/data/registros.js';
import { RenderContext } from '../../../contexts/RenderContext';

// Função para calcular total de valores
function calcular(array, propriedade){

    const total = array.reduce(
        (acumulador, registro) => acumulador + registro[propriedade], 0
    )

    return total > 0? total: 0.00;

}

export default function Reembolso(){

    const {openModal} = useContext(RenderContext)

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
        setDados({
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

        console.log('Limpou')
    }

    return(
        
        <section className={styles.container}>

            <Caminho>
                <img src={IconeHomeGray} alt="" />
                <img src={IconeSeta} alt="" />
                <p>Reembolsos</p>
                <img src={IconeSeta} alt="" />
                <p>Solicitação de Reembolso</p>
            </Caminho>

            {/* Formulário recebe a função 'handleSalvar' para adicionar novo registro ao Array de Registros Local */}
            <form>

                <div className={styles.boxIdentificacao}>

                    <div className={styles.medium}>

                        <label>Nome Completo</label>

                        <Input 
                            tipo='text'
                            name='colab'
                            value={dados.colab}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className={styles.small}>

                        <label>Empresa</label>

                        <Input 
                            tipo='text'
                            name='empresa'
                            value={dados.empresa}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className={styles.small}>

                        <label>Nº Prest.Contas</label>

                        <Input 
                            tipo='text'
                            name='prest'
                            value={dados.prest}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className={styles.total}>

                        <label>Descrição / Motivo do Reembolso</label>

                        <Input 
                            tipo='text'
                            name='descricao'
                            value={dados.descricao}
                            onChange={handleChange}
                            required
                        />

                    </div>

                </div>

                <div className={styles.linha}></div>

                <div className={styles.boxDados}>

                    <div className={styles.intermediario}>
                        <label>Data</label>
                        <Input 
                            type='date'
                            name='data'
                            value={dados.data}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.medium}>
                        <label>Tipo de Despesa</label>
                        <Select
                            array={tiposDespesa}
                            name='tipo'
                            value={dados.tipo}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.medium}>
                        <label>Controle de Custo</label>
                        <Select
                            array={controleCustos}
                            name='ctrCusto'
                            value={dados.ctrCusto}
                            onChange={handleChange}
                            required
                        />
                    </div>


                    <div className={styles.micro}>
                        <label>Ord. Int.</label>
                        <Input 
                            tipo='text'
                            name='ordInt'
                            value={dados.ordInt}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.micro}>
                        <label>PEP</label>
                        <Input 
                            tipo='text'
                            name='pep'
                            value={dados.pep}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.micro}>
                        <label>Div.</label>
                        <Input 
                            tipo='text'
                            name='div'
                            value={dados.div}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.micro}>
                        <label>Dist. / Km</label>
                        <Input 
                            tipo='text'
                            name='distKm'
                            value={dados.distKm}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.micro}>
                        <label>Moeda</label>
                        <Input 
                            tipo='text'
                            name='moeda'
                            value={dados.moeda}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.micro}>
                        <label>Valor / Km</label>
                        <Input 
                            tipo='text'
                            name='valKm'
                            value={dados.valKm}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.micro}>
                        <label>Val. despesa</label>
                        <Input 
                            tipo='text'
                            name='despesa'
                            value={dados.despesa}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.micro}>
                        <label>Val. Faturado</label>
                        <Input 
                            tipo='text'
                            name='valFaturado'
                            value={dados.valFaturado}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.botoes}>
                        <Button 
                            tipo='container'
                            cor='azulEscuro'
                            // type='submit'
                            funcao={handleSalvar}
                        >
                            <img src={IconeSalvar} alt="" />
                            Salvar
                        </Button>

                        <Button 
                            tipo='icon'
                            cor='azulClaro'
                            funcao={openModal} // Abrir Modal
                        >
                            <img src={IconeApagar} alt="" />
                        </Button>
                    </div>

                </div>

            </form>
            
            {/* Renderiza os Array de Dados 'local' */}
            <Tabela 
                array={registros}
            />

            <section className={styles.controles}>

                <div>
                    <p>Total Faturado</p>

                    <div className={styles.box}>
                        {calcular(registros, 'valFaturado')}
                    </div>

                </div>

                <div>
                    <p>Total Despesa</p>
                    <div className={styles.box}>
                        {calcular(registros, 'despesa')}
                    </div>
                </div>

                <Button 
                    tipo='containerGrande'
                    cor='azulEscuro'
                >
                    <img src={IconeEnviar} alt="" />
                    Enviar para Análise
                </Button>

                <Button 
                    tipo='containerGrande'
                    cor='vinho'
                    funcao={openModal} // Abrir Modal
                >
                    <img src={IconeCancelar} alt="" />
                    Cancelar Solicitação
                </Button>

            </section>
            
        </section>
    )
}