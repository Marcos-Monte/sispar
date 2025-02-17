// Import Estilização
import styles from './Tabela.module.scss';
// Import Icones
import IconeArquivo from '@/assets/icons/arquivo.png';
import IconeExcluir from '@/assets/icons/lixeira.png';
// Import Componentes
import { Button } from '@/components/users/Buttons/Button.jsx';
import { useContext } from 'react';
import { CrudContext } from '../../../contexts/CrudContext';
import { RenderContext } from '../../../contexts/RenderContext';

export default function Tabela(props){

    const {openModal} = useContext(RenderContext)
    const {registros} = useContext(CrudContext)

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
                    <th>Ctr. Custo</th>
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
                registros.map((obj, index) => (

                    <tr className={styles.linha} key={index}>

                        <td>
                            <Button
                                tipo='icon'
                                cor='transparente'
                                funcao={() => openModal('excluir')}
                            >
                                {<img src={IconeExcluir} alt="" />}
                            </Button>
                        </td>

                        <td>
                            <span>{obj.colab.toUpperCase()}</span>
                        </td>

                        <td>
                            <span>{obj.empresa.toUpperCase()}</span>
                        </td>
                        
                        <td>
                            <span>{obj.prest}</span>
                        </td>

                        <td>
                            <span>{obj.data}</span>
                        </td>

                        <td>
                            <span>{<img src={IconeArquivo} alt="" />}</span>
                        </td>

                        <td>
                            <span>{obj.tipo.toUpperCase()}</span>
                        </td>

                        <td>
                            <span>{obj.ctrCusto.toUpperCase()}</span>
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
                            <span>{obj.moeda.toUpperCase()}</span>
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