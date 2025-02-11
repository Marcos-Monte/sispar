import styles from './Tabela.module.scss';

import IconeExcluir from '@/assets/icons/lixeira.png';

export default function Tabela(props){
    return(
        <table>
            <thead className={styles.cabecalho}>
                <tr className={styles.linha}>
                    <th></th>
                    <th>Colaborador(a)</th>
                    <th>Empresa</th>
                    <th>Nº Prest.</th>
                    <th>Data</th>
                    <th>Motivo</th>
                    <th>Tipo Reemb.</th>
                    <th>Cth. Custo</th>
                    <th>Ord. Int.</th>
                    <th>Div.</th>
                    <th>PEP</th>
                    <th>Moeda</th>
                    <th>Dist. Km</th>
                    <th>Val. Km</th>
                    <th>Val. Faturado</th>
                    <th>Despesa</th>
                </tr>
            </thead>

            <tbody className={styles.corpo}>

            {   
                props.array.map((obj, index) => (

                    <tr className={styles.linha} key={index}>

                        <td>{<img src={IconeExcluir} alt="" />}</td>

                        <td>
                            <span>{obj.colab}</span>
                        </td>

                        <td>
                            <span>{obj.empresa}</span>
                        </td>
                        
                        <td>
                            <span>{obj.prest}</span>
                        </td>

                        <td>
                            <span>{obj.data}</span>
                        </td>

                        <td>
                            <span><img src={obj.motivo} alt="" /></span>
                        </td>

                        <td>
                            <span>{obj.tipo}</span>
                        </td>

                        <td>
                            <span>{obj.ctrCusto}</span>
                        </td>
                        
                        <td>
                            <span>{obj.ordInt}</span>
                        </td>
                        
                        <td>
                            <span>{obj.div}</span>
                        </td>

                        <td>
                            <span>{obj.pep}</span>
                        </td>

                        <td>
                            <span>{obj.moeda}</span>
                        </td>

                        <td>
                            <span>{obj.distKm}</span>
                        </td>

                        <td>
                            <span>{obj.valKm}</span>
                        </td>
                        
                        <td>
                            <span>{obj.valFaturado}</span>
                        </td>

                        <td>
                            <span>{obj.despesa}</span>
                        </td>

                    </tr>

                ))
            }
            
            </tbody>

        </table>
    )
}