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
import { controleCustos, tiposDespesa } from '../../../data/opcoes';
import solicitacoesReembolso from '../../../data/registros';

function calcular(array, propriedade){

    const total = array.reduce(
        (acumulador, registro) => acumulador + registro[propriedade], 0
    )

    return total > 0? total: 0.00;

}

export default function Reembolso(){

    return(
        
        <section className={styles.container}>

            <Caminho>
                <img src={IconeHomeGray} alt="" />
                <img src={IconeSeta} alt="" />
                <p>Reembolsos</p>
                <img src={IconeSeta} alt="" />
                <p>Solicitação de Reembolso</p>
            </Caminho>

            <form action="">

                <div className={styles.boxIdentificacao}>

                    <div className={styles.medium}>

                        <label>Nome Completo</label>

                        <Input 
                            tipo='text'
                        />

                    </div>

                    <div className={styles.small}>

                        <label>Empresa</label>

                        <Input 
                            tipo='text'
                        />

                    </div>

                    <div className={styles.medium}>

                        <label>Nº Prest.Contas</label>

                        <Input 
                            tipo='number'
                        />

                    </div>

                    <div className={styles.large}>

                        <label>Descrição / Motivo do Reembolso</label>

                        <Input 
                            tipo='text'
                        />

                    </div>

                </div>

                <div className={styles.linha}></div>

                <div className={styles.boxDados}>

                    <div className={styles.small}>
                        <label>Data</label>
                        <Input 
                            type='date'
                        />
                    </div>

                    <div className={styles.medium}>
                        <label>Tipo de Despesa</label>
                        <Select
                            array={tiposDespesa}
                            
                        />
                    </div>

                    <div className={styles.medium}>
                        <label>Controle de Custo</label>
                        <Select
                            array={controleCustos}
                            
                        />
                    </div>


                    <div className={styles.micro}>
                        <label>Ord. Int.</label>
                        <Input 
                            tipo='number'
                        />
                    </div>

                    <div className={styles.micro}>
                        <label>PEP</label>
                        <Input 
                            tipo='text'
                        />
                    </div>

                    <div className={styles.micro}>
                        <label>Div.</label>
                        <Input 
                            tipo='text'
                        />
                    </div>

                    <div className={styles.micro}>
                        <label>Dist. / Km</label>
                        <Input 
                            tipo='text'
                        />
                    </div>

                    <div className={styles.micro}>
                        <label>Moeda</label>
                        <Input 
                            tipo='text'
                        />
                    </div>

                    <div className={styles.micro}>
                        <label>Valor / Km</label>
                        <Input 
                            tipo='text'
                        />
                    </div>

                    <div className={styles.micro}>
                        <label>Val. Taxa</label>
                        <Input 
                            tipo='text'
                        />
                    </div>

                    <div className={styles.small}>
                        <label>Val. Faturado</label>
                        <Input 
                            tipo='text'
                        />
                    </div>

                    <div className={styles.botoes}>
                        <Button 
                            tipo='container'
                            cor='azulEscuro'
                        >
                            <img src={IconeSalvar} alt="" />
                            Salvar
                        </Button>

                        <Button 
                            tipo='icon'
                            cor='azulClaro'
                        >
                            <img src={IconeApagar} alt="" />
                        </Button>
                    </div>

                </div>

            </form>
            
            <Tabela 
                array={solicitacoesReembolso}
            />

            <section className={styles.controles}>

                <div>
                    <p>Total Faturado</p>

                    <div className={styles.box}>
                        {calcular(solicitacoesReembolso, 'valFaturado')}
                    </div>

                </div>

                <div>
                    <p>Total Despesa</p>
                    <div className={styles.box}>
                        {calcular(solicitacoesReembolso, 'despesa')}
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
                >
                    <img src={IconeCancelar} alt="" />
                    Cancelar Solicitação
                </Button>

            </section>
            
        </section>
    )
}