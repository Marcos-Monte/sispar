import IconeHistorico from '@/assets/Header/botao-historico.png';
import IconeHome from '@/assets/Header/botao-home.png';
import IconeReembolso from '@/assets/Header/botao-reembolso.png';
import IconeSair from '@/assets/Header/botao-sair.png';
import FotoDefault from '@/assets/Header/image.png';
import IconeMenu from '@/assets/Header/imagem-fechar-header.png';
import { Button } from '@/components/users/Buttons/Button.jsx';
import { useContext, useState } from 'react';
import styles from './Header.module.scss';

import { CrudContext } from '@/contexts/CrudContext.jsx';
import { RenderContext } from '@/contexts/RenderContext.jsx';

export default function Header(){

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
        
        <div className={styles.containerMenu}>
            <header className={`${styles.container} ${styles[statusHeader]}`}>
                
                <Button
                    tipo='icon'
                    cor='azul'
                    hidden='hidden'
                    funcao={handleAbrirHeader}
                    
                >
                    <img src={IconeMenu} alt="Ícone do Menu, abrir e fechar a navegação" />
                </Button>

                <nav>

                    <figure>
                        <img src={cadastro.foto? cadastro.foto : FotoDefault} alt="Foto do usuário logado" onClick={() => handleAbrirHeader()}/>
                        <div className={styles.infos}>
                            <figcaption>{cadastro.nome}</figcaption>
                            <span>{cadastro.cargo}</span>
                        </div>
                    </figure>
                    

                    <section>
                        <div>
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
                        alterarRender('Historico') 
                        handleMobileMenu()
                    }}>
                        Historico
                    </li>
                    <li>
                        <a onClick={() => logout()} href='/' >Sair</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}