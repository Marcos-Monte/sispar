import styles from './Header.module.scss'

import { Button } from '@/components/users/Buttons/Button.jsx'

import Imagem from '@/assets/icons/foto.png'
import IconeCifra from '@/assets/icons/iconCifra.png'
import IconeHome from '@/assets/icons/iconHome.png'
import IconeLupa from '@/assets/icons/iconLupa.png'
import IconeReload from '@/assets/icons/iconReload.png'
import IconeSair from '@/assets/icons/iconSair.png'
import IconeVoltar from '@/assets/icons/iconVoltar.png'

export default function Header(props){
    return(
        <header className={styles.container}>
            <Button
                tipo='icon'
                cor='azul'
                rota='/'
            >
                <img src={IconeVoltar} alt="" />
            </Button>

            <nav>

                <img src={Imagem} alt="" />
                

                <div>
                    <Button 
                        tipo='icon'
                        cor='azul'
                        funcao={() => props.alterarComponente('Dashboard')}
                    >
                        <img src={IconeHome} alt="" />
                    </Button>

                    <Button 
                        tipo='icon'
                        cor='azul'
                        funcao={() => props.alterarComponente("Reembolso")} 
                    >
                        <img src={IconeCifra} alt="" />
                    </Button>

                    <Button 
                        tipo='icon'
                        cor='azul'
                        funcao={() => props.alterarComponente("Opcional1")} 
                    >
                        <img src={IconeLupa} alt="" />
                    </Button>

                    <Button 
                        tipo='icon'
                        cor='azul'
                        funcao={() => props.alterarComponente("Opcional2")} 
                    >
                        <img src={IconeReload} alt="" />
                    </Button>

                </div>

            </nav>

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