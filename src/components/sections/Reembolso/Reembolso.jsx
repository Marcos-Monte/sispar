import styles from './Reembolso.module.scss';

import { Button } from '../../users/Buttons/Button';
import { Input } from '../../users/Inputs/Input';

import IconeApagar from '@/assets/icons/iconApagar.png';
import IconeCancelar from '@/assets/icons/iconCancelar.png';
import IconeDoc from '@/assets/icons/iconDoc.png';
import IconeEnviar from '@/assets/icons/iconEnviar.png';
import IconeExcluir from '@/assets/icons/iconExcluir.png';
import IconeSalvar from '@/assets/icons/iconSalvar.png';

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

            <img src={IconeApagar} alt="" />
            <img src={IconeCancelar} alt="" />
            <img src={IconeDoc} alt="" />
            <img src={IconeEnviar} alt="" />
            <img src={IconeExcluir} alt="" />

        </section>
    )
}