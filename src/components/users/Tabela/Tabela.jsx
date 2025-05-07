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
                    <th>Status</th>
                </tr>
            </thead>

            <tbody className={styles.corpo}>

            {   
                
                // Percorre o array 'registros' e adiciona cada registro na devida posição da tabela
                registros.map((obj, index) => (

                    <tr className={styles.linha} key={index}>

                        <td>
                            <span>{obj.colaborador.toUpperCase()}</span>
                        </td>

                        <td>
                            <span>{obj.empresa.toUpperCase()}</span>
                        </td>
                        
                        <td>
                            <span>{obj.num_prestacao}</span>
                        </td>

                        <td>
                            <span>{obj.data}</span>
                        </td>

                        <td>
                            {/* <span>{<img src={IconeArquivo} alt="Ícone em formado de um arquivo" />}</span> */}
                            <span>{obj.descricao}</span>
                        </td>

                        <td>
                            <span>{obj.tipo_reembolso.toUpperCase()}</span>
                        </td>

                        <td>
                            <span>{obj.centro_custo.toUpperCase()}</span>
                        </td>
                        
                        <td>
                            <span>{obj.ordem_interna}</span>
                        </td>
                        
                        <td>
                            <span>{obj.divisao}</span>
                        </td>

                        <td>
                            <span>{obj.pep}</span>
                        </td>

                        <td>
                            <span>{obj.moeda.toUpperCase()}</span>
                        </td>

                        <td>
                            <span>{obj.distancia_km}</span>
                        </td>

                        <td>
                            <span>{obj.valor_km}</span>
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