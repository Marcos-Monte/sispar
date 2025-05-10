// Import Estilização
import styles from './Tabela.module.scss';
// Import Icones
// import IconeArquivo from '@/assets/icons/arquivo.png';
import IconeEditar from '@/assets/icons/lapis.png';
import IconeExcluir from '@/assets/icons/lixeira.png';
// Import Componentes
import { Button } from '@/components/users/Buttons/Button.jsx';
import { useContext } from 'react';
// Import de Contextos
// import { RenderContext } from '../../../contexts/RenderContext';
import { CrudContext } from '@/contexts/CrudContext.jsx';

export default function Tabela(){
    // Importando função que renderiza a abertura de um modal 
    // const {openModal} = useContext(RenderContext)
    // Importa um array de registros para renderizar o conteudo na tela
    const {solicitacoes, excluirRegistro, editarSolicitacao, abrirModal} = useContext(CrudContext)

    function handleEditar(obj){
        abrirModal('editar', () => editarSolicitacao(obj))
    }
    
    function handleExcluir(obj){
        abrirModal('excluir', () => excluirRegistro(obj))
    }

    return(
        <table>
            <thead className={styles.cabecalho}>
                <tr className={styles.linha}>
                    <th></th>
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
                solicitacoes.map((obj, index) => (

                    <tr className={styles.linha} key={index}>

                        <td>
                            {/* Passa o 'objeto / registro' que será excluído dos registros! */}
                            <Button
                                tipo='container'
                                cor='transparente'
                                funcao={() => handleExcluir(obj)}
                            >
                                {<img src={IconeExcluir} alt="Ícone de uma lixeira" />}
                            </Button>
                        </td>
                        <td className={styles.editar}>
                            {/* Passa o 'objeto / registro' que será excluído dos registros! */}
                            <Button
                                tipo='container'
                                cor='transparente'
                                funcao={() => handleEditar(obj)}
                            >
                                {<img src={IconeEditar} alt="Ícone de um lápis" className={styles.iconeEditar}/>}
                            </Button>
                        </td>

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

                    </tr>

                ))
            }
            
            </tbody>

        </table>
    )
}