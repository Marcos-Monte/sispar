// Import Estilização
import styles from './Tabela.module.scss';
// Import Icones
// import IconeArquivo from '@/assets/icons/arquivo.png';
// Import Componentes
import { useContext } from 'react';
// Import de Contextos
// import { RenderContext } from '../../../contexts/RenderContext';
import { CrudContext } from '@/contexts/CrudContext.jsx';

export default function Tabela(){
    // Importando função que renderiza a abertura de um modal 
    // const {openModal} = useContext(RenderContext)
    // Importa um array de registros para renderizar o conteudo na tela
    const {registros} = useContext(CrudContext)

    return(
        <table>
            <thead className={styles.cabecalho}>
                <tr className={styles.linha}>
                    <th className={styles.overflow}>Nº Prest.</th>
                    <th className={styles.overflow}>Colaborador(a)</th>
                    <th className={styles.overflow}>Empresa</th>
                    <th className={styles.overflow}>Data</th>
                    {/* <th className={styles.overflow}>Motivo</th> */}
                    <th className={styles.overflow}>Tipo Reemb.</th>
                    <th className={styles.overflow}>Ctr. Custo</th>
                    {/* <th className={styles.overflow}>Ord. Int.</th> */}
                    {/* <th className={styles.overflow}>Div.</th> */}
                    <th className={styles.overflow}>PEP</th>
                    <th className={styles.overflow}>Moeda</th>
                    {/* <th className={styles.overflow}>Dist. Km</th> */}
                    {/* <th className={styles.overflow}>Val. Km</th> */}
                    <th className={styles.overflow}>Val. Faturado</th>
                    <th className={styles.overflow}>Despesa</th>
                    <th className={styles.overflow}>Status</th>
                </tr>
            </thead>

            <tbody className={styles.corpo}>

            {   
                registros.length === 0? <div className={styles.mensagemErro}><h2>Não há solicitações</h2></div>:
                // Percorre o array 'registros' e adiciona cada registro na devida posição da tabela
                registros.map((obj, index) => (

                    <tr className={styles.linha} key={index}>
                        <td>
                            <span>{obj.num_prestacao}</span>
                        </td>

                        <td>
                            <span>{obj.colaborador.toUpperCase()}</span>
                        </td>

                        <td>
                            <span>{obj.empresa.toUpperCase()}</span>
                        </td>
                        
                        

                        <td>
                            <span>{obj.data}</span>
                        </td>

                        {/* <td>
                            <span>{obj.descricao}</span>
                        </td> */}

                        <td>
                            <span>{obj.tipo_reembolso.toUpperCase()}</span>
                        </td>

                        <td>
                            <span>{obj.centro_custo.toUpperCase()}</span>
                        </td>
                        
                        {/* <td>
                            <span>{obj.ordem_interna}</span>
                        </td> */}
                        
                        {/* <td>
                            <span>{obj.divisao}</span>
                        </td> */}

                        <td>
                            <span>{obj.pep}</span>
                        </td>

                        <td>
                            <span>{obj.moeda.toUpperCase()}</span>
                        </td>

                        {/* <td>
                            <span>{obj.distancia_km}</span>
                        </td> */}

                        {/* <td>
                            <span>{obj.valor_km}</span>
                        </td> */}
                        
                        <td>
                            <span>{obj.valor_faturado}</span>
                        </td>

                        <td>
                            <span>{obj.despesa}</span>
                        </td>
                        <td>
                            <span>{obj.status.toUpperCase()}</span>
                        </td>

                    </tr>

                ))
            }
            
            </tbody>

        </table>
    )
}