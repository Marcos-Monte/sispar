// Import arquivo de Estilização
import styles from './Reembolso.module.scss';
// Import Componentes
import { Button } from '../../users/Buttons/Button';
import { Input } from '../../users/Inputs/Input';
import Tabela from '../../users/Tabela/Tabela';
// Import Icones
import IconeApagar from '@/assets/icons/apagar.png';
import IconeCancelar from '@/assets/icons/cancelar.png';
import IconeEnviar from '@/assets/icons/enviar.png';
import IconeSalvar from '@/assets/icons/salvar.png';
// Import Dados
import solicitacoesReembolso from '../../../data/data';

function calcular(array, propriedade){

    const total = array.reduce(
        (acumulador, registro) => acumulador + registro[propriedade], 0
    )

    return total > 0? total: 0.00;

}

export default function Reembolso(){
    return(
        <section className={styles.container}>

            <form action="">

                <fieldset className={styles.boxIdentificacao}>

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

                </fieldset>

                <div className={styles.linha}></div>

                <fieldset className={styles.boxDados}>

                    <div className={styles.small}>
                        <label>Data</label>
                        <Input 
                            tipo='text'
                        />
                    </div>

                    <div className={styles.small}>
                        <label>Tipo de Despsa</label>
                        <Input 
                            tipo='text'
                        />
                    </div>

                    <div className={styles.medium}>
                        <label>Controle de Custo</label>
                        <Input 
                            tipo='text'
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

                </fieldset>

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