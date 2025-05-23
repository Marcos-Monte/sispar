import styles from './Tabela.module.scss';

import IconeEditar from '@/assets/icons/lapis.png';
import IconeExcluir from '@/assets/icons/lixeira.png';

import { Button } from '@/components/users/Buttons/Button.jsx';
import { useContext } from 'react';

import { CrudContext } from '@/contexts/CrudContext.jsx';

export default function Tabela(){
    
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
                    <th className={styles.overflow}></th>
                    <th className={styles.overflow}></th>
                    <th className={styles.overflow}>Colaborador(a)</th>
                    <th className={styles.overflow}>Empresa</th>
                    <th className={styles.overflow}>Data</th>
                    <th className={styles.overflow}>Motivo</th>
                    <th className={styles.overflow}>Tipo Reemb.</th>
                    <th className={styles.overflow}>Ctr. Custo</th>
                    <th className={styles.overflow}>Ord. Int.</th>
                    <th className={styles.overflow}>Div.</th>
                    <th className={styles.overflow}>Moeda</th>
                    <th className={styles.overflow}>Dist. Km</th>
                    <th className={styles.overflow}>Val. Km</th>
                    <th className={styles.overflow}>Val. Faturado</th>
                    <th className={styles.overflow}>Despesa</th>
                </tr>
            </thead>

            <tbody className={styles.corpo}>

            {   
                
                solicitacoes.map((obj, index) => (

                    <tr className={styles.linha} key={index}>

                        <td className={styles.deleteStyle}>
                            
                            <Button
                                tipo='container'
                                cor='transparente'
                                funcao={() => handleExcluir(obj)}
                            >
                                {<img src={IconeExcluir} alt="Ícone de uma lixeira" />}
                            </Button>
                        </td>
                        <td className={styles.editar}>
                            
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
                            <span>{obj.data}</span>
                        </td>

                        <td>
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