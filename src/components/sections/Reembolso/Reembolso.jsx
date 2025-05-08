// Import de hooks
import { useContext } from 'react';
// Import arquivo de Estilização
import styles from './Reembolso.module.scss';
// Import Componentes
import Caminho from '../../template/Caminho/Caminho';
import { Button } from '../../users/Buttons/Button';
import { Input, InputData, Select, TextArea } from '../../users/Inputs/Input';
import TabelaReembolso from '../../users/Tabela/TabelaReembolso';
// Import Icones
import IconeApagar from '@/assets/icons/apagar.png';
import IconeCancelar from '@/assets/icons/cancelar.png';
import IconeEnviar from '@/assets/icons/enviar.png';
import IconeHomeGray from '@/assets/icons/home.png';
import IconeSalvar from '@/assets/icons/salvar.png';
import IconeSeta from '@/assets/icons/seta.png';
// Import Dados
import { controleCustos, tiposDespesa, tiposMoeda } from '@/data/opcoes.js';
// import solicitacoesReembolso from '@/data/registros.js';
import { CrudContext } from '../../../contexts/CrudContext';
import { RenderContext } from '../../../contexts/RenderContext';

export default function Reembolso(){
    // Lógica dos Modais é gerenciado pelo 'contexto' indicado
    const {openModal} = useContext(RenderContext)

    // Toda a lógica de CRUD da aplicação é responsabilidade do 'contexto' indicado
    const {dados, handleChange, handleSalvar, limparDados, enviarSolicitacao, cancelarSolicitacao, solicitacoes, calcularFaturamento} = useContext(CrudContext)

    return(
        
        <section className={styles.container}>

            <Caminho>
                <img src={IconeHomeGray} alt="Ícone no formato de casa na cor cinza" />
                <img src={IconeSeta} alt="Ícone do símbolo 'maior que'" />
                <p>Reembolsos</p>
                <img src={IconeSeta} alt="Ícone do símbolo 'maior que'" />
                <p>Solicitação de Reembolso</p>
            </Caminho>

            {/* Formulário recebe a função 'handleSalvar' para adicionar novo registro ao Array de Registros Local */}
            <form>

                <div className={styles.boxIdentificacao}>

                    <div className={styles.medium}>

                        <label>Nome Completo</label>

                        <Input 
                            type='text'
                            name='colaborador'
                            value={dados.colaborador}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className={styles.small}>

                        <label>Empresa</label>

                        <Input 
                            type='text'
                            name='empresa'
                            value={dados.empresa}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className={styles.small}>

                        <label>Nº Prest.Contas</label>

                        <Input 
                            type='text'
                            name='num_prestacao'
                            value={dados.num_prestacao}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className={styles.total}>

                        <label>Descrição / Motivo do Reembolso</label>

                        <TextArea 
                            type='text'
                            name='descricao'
                            value={dados.descricao}
                            onChange={handleChange}
                        ></TextArea>

                    </div>

                </div>

                <div className={styles.linha}></div>

                <div className={styles.boxDados}>

                    <div className={styles.intermediario}>
                        <label>Data</label>
                        <InputData 
                            type='date'
                            name='data'
                            value={dados.data}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.medium}>
                        <label>Tipo de Reembolso</label>
                        <Select
                            array={tiposDespesa}
                            name='tipo_reembolso'
                            value={dados.tipo_reembolso}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.medium}>
                        <label>Controle de Custo</label>
                        <Select
                            array={controleCustos}
                            name='centro_custo'
                            value={dados.centro_custo}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.micro}>
                        <label>Ord. Int.</label>
                        <Input 
                            type='text'
                            name='ordem_interna'
                            value={dados.ordem_interna}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.micro}>
                        <label>PEP</label>
                        <Input 
                            type='text'
                            name='pep'
                            value={dados.pep}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.micro}>
                        <label>Div.</label>
                        <Input 
                            type='text'
                            name='divisao'
                            value={dados.divisao}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.micro}>
                        <label>Dist. / Km</label>
                        <Input 
                            type='text'
                            name='distancia_km'
                            value={dados.distancia_km}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.small}>
                        <label>Moeda</label>
                        <Select
                            array={tiposMoeda}
                            name='moeda'
                            value={dados.moeda}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.micro}>
                        <label>Valor / Km</label>
                        <Input 
                            type='text'
                            name='valor_km'
                            value={dados.valor_km}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.micro}>
                        <label>Valor Desp.</label>
                        <Input 
                            type='text'
                            name='despesa'
                            value={dados.despesa}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.micro}>
                        <label>Valor Fat.</label>
                        <Input 
                            type='text'
                            name='valor_faturado'
                            value={dados.valor_faturado}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.botoes}>
                        <Button 
                            tipo='container'
                            cor='azulEscuro'
                            // type='submit'
                            funcao={() => handleSalvar(dados)}
                        >
                            <img src={IconeSalvar} alt="Ícone de somar" />
                            Salvar
                        </Button>

                        <Button 
                            tipo='icon'
                            cor='azulClaro'
                            funcao={() => limparDados()} // Abrir Modal
                        >
                            <img src={IconeApagar} alt="Ícone de apagar valores inseridos" />
                        </Button>
                    </div>

                </div>

            </form>
            
            {/* Array de Registros renderizado diretamente no Componente Tabela */}
            <TabelaReembolso />

            <section className={styles.controles}>

                <div>
                    <p>Total Faturado</p>

                    <div className={styles.box}>
                        {calcularFaturamento('valor_faturado')}
                    </div>

                </div>

                <div>
                    <p>Total Despesa</p>
                    <div className={styles.box}>
                        {calcularFaturamento('despesa')}
                    </div>
                </div>

                <Button 
                    tipo='containerGrande'
                    cor='azulEscuro'
                    funcao={() => enviarSolicitacao()}
                >
                    <img src={IconeEnviar} alt="Ícone com o símbolo de 'certo'" />
                    Enviar para Análise
                </Button>

                <Button 
                    tipo='containerGrande'
                    cor='vinho'
                    funcao={() => cancelarSolicitacao()} // Abrir Modal
                >
                    <img src={IconeCancelar} alt="Ícone com um X" />
                    Cancelar Solicitação
                </Button>

            </section>
            
        </section>
    )
}