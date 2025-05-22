// Import de arquivo de estilização
import styles from './Historico.module.scss';
// Import componentes
import Caminho from '../../template/Caminho/Caminho';
import Tabela from '../../users/Tabela/Tabela';

// Import de Icones e Imagens
import IconeHomeGray from '@/assets/icons/home.png';
import IconeSeta from '@/assets/icons/seta.png';

import { CrudContext } from '@/contexts/CrudContext.jsx';
import { useContext, useState } from 'react';

import { Button } from '@/components/users/Buttons/Button';

export default function Historico(){

    const {calcularFaturamento, registros} = useContext(CrudContext)

    const [registrosFiltrados, setRegistrosFiltrados] = useState(registros)

    function handleFiltrar(filtro){
        if(filtro){
            if(filtro === filtro){
                const resultado = registros.filter((registro) => registro.status === filtro)
                setRegistrosFiltrados(resultado)
                return
            }
            
        } else {
            setRegistrosFiltrados(registros)
        }
    }

    return(
        <section className={styles.container}>

            <Caminho
                estilo="hidden"
            >
                <img src={IconeHomeGray} alt="Ícone no formato de casa na cor cinza" />
                <img src={IconeSeta} alt="Ícone do símbolo 'maior que'" />
                <p>Reembolsos</p>
                <img src={IconeSeta} alt="Ícone do símbolo 'maior que'" />
                <p>Histórico de Reembolsos</p>
            </Caminho>

            <section className={styles.buttons}>
                <Button 
                    tipo='container'
                    texto="Entrar"
                    cor="azulEscuro"
                    funcao={() => handleFiltrar()}
                >
                    Todos
                </Button>
                <Button 
                    tipo='container'
                    texto="Entrar"
                    cor="laranja"
                    funcao={() => handleFiltrar('analisando')}
                >
                    Em análise
                </Button>
                <Button 
                    tipo='container'
                    texto="Entrar"
                    cor="verde"
                    funcao={() => handleFiltrar('aprovado')}
                >
                    Aprovados
                </Button>
                <Button 
                    tipo='container'
                    texto="Entrar"
                    cor="vinho"
                    funcao={() => handleFiltrar('rejeitado')}
                >
                    Rejeitados
                </Button>
            </section>

            <Tabela registros={registrosFiltrados}/>

            <section className={styles.controles}>

                <div>
                    <p>Total Faturado</p>

                    <div className={styles.box}>
                        {calcularFaturamento(registrosFiltrados, 'valor_faturado')}
                    </div>

                </div>

                <div>
                    <p>Total Despesa</p>
                    <div className={styles.box}>
                        {calcularFaturamento(registrosFiltrados, 'despesa')}
                    </div>
                </div>

            </section>

        </section>
    )
}