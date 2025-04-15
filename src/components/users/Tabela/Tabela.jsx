// Import Estilização
import styles from './Tabela.module.scss';
// Import Icones
import IconeArquivo from '@/assets/icons/arquivo.png';
import IconeExcluir from '@/assets/icons/lixeira.png';
// Import Componentes
import { Button } from '@/components/users/Buttons/Button.jsx';
import { useContext } from 'react';
// Import de Contextos
import { CrudContext } from '../../../contexts/CrudContext';
import { RenderContext } from '../../../contexts/RenderContext';

export default function Tabela(){
    // Importando função que renderiza a abertura de um modal 
    const {openModal} = useContext(RenderContext)
    // Importa um array de registros para renderizar o conteudo na tela
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
                // Percorre o array 'registros' e adiciona cada registro na devida posição da tabela
                registros.map((obj, index) => (

                    <tr className={styles.linha} key={index}>

                        <td>
                            {/* Passa o 'objeto / registro' que será excluído dos registros! */}
                            <Button
                                tipo='container'
                                cor='transparente'
                                funcao={() => openModal('excluir', obj)}
                            >
                                {<img src={IconeExcluir} alt="Ícone de uma lixeira" />}
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
                            <span>{<img src={IconeArquivo} alt="Ícone em formado de um arquivo" />}</span>
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