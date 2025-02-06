// Import do arquivo de estilização do componente
import styles from './Header.module.scss'
// Import de Componentes
import { Button } from '@/components/users/Buttons/Button.jsx'
// Import de Imagens / Icones 
import Imagem from '@/assets/icons/foto.png'
import IconeCifra from '@/assets/icons/iconCifra.png'
import IconeHome from '@/assets/icons/iconHome.png'
import IconeLupa from '@/assets/icons/iconLupa.png'
import IconeReload from '@/assets/icons/iconReload.png'
import IconeSair from '@/assets/icons/iconSair.png'
import IconeVoltar from '@/assets/icons/iconVoltar.png'

// OBS: Função do Button, é uma função anônima que vai receber um 'setter' (via props) e armazena um valor 'string'.
export default function Header(props){
    return(
        <header className={styles.container}>
            {/* Botão que recebe 'rota' será enviado para outra página. Não recebe 'função'*/}
            <Button
                tipo='icon'
                cor='azul'
                rota='/'
            >
                <img src={IconeVoltar} alt="" />
            </Button>

            <nav>
                {/* Imagem ilutrativa que irá receber a foto do usuário cadastrado */}
                <figure>
                    <img src={Imagem} alt="" />
                    <div>
                        <figcaption>Marcos Monte</figcaption>
                        <span>Desenvolvedor Web</span>
                    </div>
                </figure>
                

                <section>
                    <div>
                        {/* Botão que recebe 'função', tem evento de 'click' que renderiza um novo componente central na 'pagina atual'. Não recebe 'Rota'*/}
                        <Button 
                            tipo='icon'
                            cor='azul'
                            funcao={() => props.alterarComponente('Dashboard')}
                        >
                            <img src={IconeHome} alt="" />
                        </Button>

                        <p>Inicio</p>
                    </div>

                    <div>
                        
                        {/* Botão que recebe 'função', tem evento de 'click' que renderiza um novo componente central na 'pagina atual'. Não recebe 'Rota'*/}
                        <Button 
                            tipo='icon'
                            cor='azul'
                            funcao={() => props.alterarComponente("Reembolso")} 
                        >
                            <img src={IconeCifra} alt="" />
                        </Button>

                        <p>Reembolsos</p>
                    </div>

                    <div>
                        {/* Botão que recebe 'função', tem evento de 'click' que renderiza um novo componente central na 'pagina atual'. Não recebe 'Rota'*/}
                        <Button 
                            tipo='icon'
                            cor='azul'
                            funcao={() => props.alterarComponente("Analises")} 
                        >
                            <img src={IconeLupa} alt="" />
                        </Button>

                        <p>Análises</p>
                    </div>

                    <div>
                        {/* Botão que recebe 'função', tem evento de 'click' que renderiza um novo componente central na 'pagina atual'. Não recebe 'Rota'*/}
                        <Button 
                            tipo='icon'
                            cor='azul'
                            funcao={() => props.alterarComponente("Historico")} 
                        >
                            <img src={IconeReload} alt="" />
                        </Button>

                        <p>Histórico</p>
                    </div>

                </section>

            </nav>

            {/* Botão que recebe 'rota' será enviado para outra página. Não recebe 'função'*/}
            <Button 
                tipo='icon'
                cor='cinza'
                rota='/'
            >
                <img src={IconeSair} alt="" />
            </Button>

        </header>
    )
}