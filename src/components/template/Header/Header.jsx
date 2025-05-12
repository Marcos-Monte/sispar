// Import dependencias React
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Import do arquivo de estilização do componente
import styles from './Header.module.scss';
// Import de Componentes
import { Button } from '@/components/users/Buttons/Button.jsx';
// Import de Imagens / Icones 
import IconeHistorico from '@/assets/Header/botao-historico.png';
import IconeHome from '@/assets/Header/botao-home.png';
import IconePesquisa from '@/assets/Header/botao-pesquisa.png';
import IconeReembolso from '@/assets/Header/botao-reembolso.png';
import IconeSair from '@/assets/Header/botao-sair.png';
import FotoDefault from '@/assets/Header/image.png';
import IconeMenu from '@/assets/Header/imagem-fechar-header.png';

// Import de Contexto
import { CrudContext } from '@/contexts/CrudContext.jsx';
import { RenderContext } from '@/contexts/RenderContext.jsx';


// OBS: Função do Button, é uma função anônima que vai receber um 'setter' (via props) e armazena um valor 'string'.
export default function Header(){

    const navigate = useNavigate();

    // Importando Funções e Variáveis de Estado de um Componente de Contexto'. Veio de um Contexto
    const {alterarRender, openHeader, statusHeader} = useContext(RenderContext)
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const {cadastro, abrirModal } = useContext(CrudContext)

    function handleMobileMenu(){
        setIsOpenMenu(!isOpenMenu)
    }

    function handleAbrirHeader() {
        openHeader();
    }

    function logout(){
        localStorage.removeItem('user');
        localStorage.removeItem('solicitacoes');
    }

    return(
        // Condicional de abrir ou fechar o 'header' ativada por Funções e Variaveis de Estado do Componente de Contexto
        <div className={styles.containerMenu}>
            <header className={`${styles.container} ${styles[statusHeader]}`}>
                {/* Botão que recebe 'rota' será enviado para outra página. Não recebe 'função'*/}
                <Button
                    tipo='icon'
                    cor='azul'
                    hidden='hidden'
                    // rota='/'
                    funcao={handleAbrirHeader}
                    
                >
                    <img src={IconeMenu} alt="Ícone do Menu, abrir e fechar a navegação" />
                </Button>

                <nav>
                    {/* Imagem ilutrativa que irá receber a foto do usuário cadastrado */}
                    <figure>
                        <img src={cadastro.foto ? `${cadastro.foto}`: FotoDefault} alt="Foto do usuário logado" onClick={() => handleAbrirHeader()}/>
                        <div className={styles.infos}>
                            <figcaption>{cadastro.nome}</figcaption>
                            <span>{cadastro.cargo}</span>
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
                <div>
                        <Button 
                        tipo='icon'
                        cor='cinza'
                        hidden='hidden'
                        funcao={() => logout()}
                        rota="/"
                    >
                        <img src={IconeSair} alt="Ícone de saída da aplicação, Log off" />
                    </Button>
                
                    <Button 
                        tipo='icon'
                        cor='azul'
                        funcao={handleMobileMenu}
                        hidden='mobileHidden'
                    > 
                        <i className="bi bi-three-dots-vertical"></i>
                    </Button>
                
                </div>
                
            </header>

            <nav className={styles[isOpenMenu ? 'mobileMenuVisible' : 'mobileMenuHidden']}>
                <ul className={styles.menuList}>
                    <li onClick={() => {
                        alterarRender('Dashboard') 
                        handleMobileMenu()
                    }}>
                        Início
                    </li>
                    <li onClick={() => {
                        alterarRender('Reembolso') 
                        handleMobileMenu()
                    }}>
                        Reembolsos
                    </li>
                    <li onClick={() => {
                        alterarRender('Analises') 
                        handleMobileMenu()
                    }}>
                        Analises
                    </li>
                    <li onClick={() => {
                        alterarRender('Historico') 
                        handleMobileMenu()
                    }}>
                        Historico
                    </li>
                </ul>
            </nav>
        </div>
    )
}