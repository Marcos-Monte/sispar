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
                        <td>{obj.colab}</td>
                        <td>{obj.empresa}</td>
                        <td>{obj.prest}</td>
                        <td>{obj.data}</td>
                        <td><img src={obj.motivo} alt="" /></td>
                        <td>{obj.tipo}</td>
                        <td>{obj.ctrCusto}</td>
                        <td>{obj.ordInt}</td>
                        <td>{obj.div}</td>
                        <td>{obj.pep}</td>
                        <td>{obj.moeda}</td>
                        <td>{obj.distKm}</td>
                        <td>{obj.valKm}</td>
                        <td>{obj.valFaturado}</td>
                        <td>{obj.despesa}</td>

                    </tr>

                ))
            }
            
            </tbody>

        </table>
    )
}