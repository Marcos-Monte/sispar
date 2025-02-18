// Import dependencias React
import { useContext } from 'react'
// Import do arquivo de estilização do componente
import styles from './Header.module.scss'
// Import de Componentes
import { Button } from '@/components/users/Buttons/Button.jsx'
// Import de Imagens / Icones 
import IconeHistorico from '@/assets/Header/botao-historico.png'
import IconeHome from '@/assets/Header/botao-home.png'
import IconePesquisa from '@/assets/Header/botao-pesquisa.png'
import IconeReembolso from '@/assets/Header/botao-reembolso.png'
import IconeSair from '@/assets/Header/botao-sair.png'
import IconeMenu from '@/assets/Header/imagem-fechar-header.png'

// Import de Dados Cadastrais
import cadastro from '../../../data/cadastros.js'

// Import de Contexto
import { RenderContext } from '@/contexts/RenderContext.jsx'

// OBS: Função do Button, é uma função anônima que vai receber um 'setter' (via props) e armazena um valor 'string'.
export default function Header(){

    // Importando Funções e Variáveis de Estado de um Componente de Contexto'. Veio de um Contexto
    const {alterarRender, openHeader, statusHeader} = useContext(RenderContext)

    return(
        // Condicional de abrir ou fechar o 'header' ativada por Funções e Variaveis de Estado do Componente de Contexto
        <header className={`${styles.container} ${styles[statusHeader]}`}>
            {}
            {/* Botão que recebe 'rota' será enviado para outra página. Não recebe 'função'*/}
            <Button
                tipo='icon'
                cor='azul'
                // rota='/'
                funcao={openHeader}
            >
                <img src={IconeMenu} alt="Ícone do Menu, abrir e fechar a navegação" />
            </Button>

            <nav>
                {/* Imagem ilutrativa que irá receber a foto do usuário cadastrado */}
                <figure>
                    <img src={cadastro.dados.foto} alt="Foto do usuário logado" />
                    <div className={styles.infos}>
                        <figcaption>{cadastro.dados.nome}</figcaption>
                        <span>{cadastro.dados.cargo}</span>
                    </div>
                </figure>
                

                <section>
                    <div>
                        {/* Botão que recebe 'função', tem evento de 'click' que renderiza um novo componente central na 'pagina atual'. Não recebe 'Rota'*/}
                        <Button 
                            tipo='icon'
                            cor='azul'
                            funcao={() => alterarRender('Dashboard')}
                        >
                            <img src={IconeHome} alt="Ícone no formato de casa na cor branca" />
                        </Button>

                        <p className={styles.infos}>Inicio</p>
                    </div>

                    <div>
                        
                        {/* Botão que recebe 'função', tem evento de 'click' que renderiza um novo componente central na 'pagina atual'. Não recebe 'Rota'*/}
                        <Button 
                            tipo='icon'
                            cor='azul'
                            funcao={() => alterarRender('Reembolso')}
                        >
                            <img src={IconeReembolso} alt="Ícone no formato de uma folha com um cifrão" />
                        </Button>

                        <p className={styles.infos}>Reembolsos</p>
                    </div>

                    <div>
                        {/* Botão que recebe 'função', tem evento de 'click' que renderiza um novo componente central na 'pagina atual'. Não recebe 'Rota'*/}
                        <Button 
                            tipo='icon'
                            cor='azul'
                            funcao={() => alterarRender('Analises')}
                        >
                            <img src={IconePesquisa} alt="Ícone com uma lupa de pesquisa" />
                        </Button>

                        <p className={styles.infos}>Análises</p>
                    </div>

                    <div>
                        {/* Botão que recebe 'função', tem evento de 'click' que renderiza um novo componente central na 'pagina atual'. Não recebe 'Rota'*/}
                        <Button 
                            tipo='icon'
                            cor='azul'
                            funcao={() => alterarRender('Historico')}
                        >
                            <img src={IconeHistorico} alt="Ícone com um relógio apontando no sentido anti-horário, significa que deseja ver o histórico" />
                        </Button>

                        <p className={styles.infos}>Histórico</p>
                    </div>

                </section>

            </nav>

            {/* Botão que recebe 'rota' será enviado para outra página. Não recebe 'função'*/}
            <Button 
                tipo='icon'
                cor='cinza'
                rota='/'
            >
                <img src={IconeSair} alt="Ícone de saída da aplicação, Log off" />
            </Button>

        </header>
    )
}