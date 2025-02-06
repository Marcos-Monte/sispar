import { Link } from 'react-router-dom';
// Import de Módulo de Estilização
import styles from './Login.module.scss';
// Import de Imagens
import Capa from '@/assets/capaInicio.svg';
import Logo from '@/assets/logoSispar.svg';

// Import de Componentes
import { Button } from '@/components/users/Buttons/Button';
import { Input } from '@/components/users/Inputs/Input';

export default function Login(){
    return(
        <main className={styles.container}>
            {/* Imagem de Capa da Aplicação */}
            <img 
                className={styles.imagemCapa}
                src={Capa} 
                alt="Imagem de uma navio cheio de conteiners navegando junto a um rebocador" 
            />
            {/* Seção que divide o 'body' da aplicação com a Imagem de Capa */}
            <section>

                {/* Login */}
                <article>

                    <div className={styles.descricao}>

                        <img 
                            src={Logo} 
                            alt="Logo da Wilson Sons" 
                        />

                        <h2>Boas Vindas ao</h2>
                        <h2>Novo Portal SISPAR</h2>
                        <p>Sistema de Emissão de Boletos e Parcelamento</p>

                    </div>

                    <form>

                        <div>
                            <Input 
                                placeholder='Email'
                                type='email'
                            />
                            <Input 
                                placeholder='Senha'
                                type='text'
                            />
                            {/* Envia para pagina de recuperação de senha */}
                            <Link to="/home">Esqueci minha senha</Link>

                        </div>

                        <div className={styles.box}>

                            <Button 
                                tipo='container'
                                texto="Entrar"
                                cor="azulEscuro"
                                rota="/home"
                            >
                                Entrar
                            </Button>

                            <Button 
                                tipo='container'
                                texto="Criar conta"
                                cor="azulClaro"
                                // rota="/reembolso"
                            >
                                Criar conta
                            </Button>

                        </div>

                    </form>

                </article>

            </section>

        </main>
    )
}