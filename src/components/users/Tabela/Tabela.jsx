// Import Estilização
import styles from './Tabela.module.scss';


export default function Tabela({registros}){

    return(
        <table>
            <thead className={styles.cabecalho}>
                <tr className={styles.linha}>
                    <th className={styles.overflow}>Nº Prest.</th>
                    <th className={styles.overflow}>Colaborador(a)</th>
                    <th className={styles.overflow}>Empresa</th>
                    <th className={styles.overflow}>Data</th>
                    <th className={styles.overflow}>Tipo Reemb.</th>
                    <th className={styles.overflow}>Ctr. Custo</th>
                    <th className={styles.overflow}>PEP</th>
                    <th className={styles.overflow}>Moeda</th>
                    <th className={styles.overflow}>Val. Faturado</th>
                    <th className={styles.overflow}>Despesa</th>
                    <th className={styles.overflow}>Status</th>
                </tr>
            </thead>

            <tbody className={styles.corpo}>

            {   
                registros.length === 0? <div className={styles.mensagemErro}><h2>Não há solicitações</h2></div>:

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

                        <td>
                            <span>{obj.tipo_reembolso.toUpperCase()}</span>
                        </td>

                        <td>
                            <span>{obj.centro_custo.toUpperCase()}</span>
                        </td>

                        <td>
                            <span>{obj.pep}</span>
                        </td>

                        <td>
                            <span>{obj.moeda.toUpperCase()}</span>
                        </td>
                        
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