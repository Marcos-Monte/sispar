// Import de Módulo de Estilização
import styles from './Inicio.module.scss'

// Import de Componentes
import { Button } from '../../users/Buttons/Button'
import { Input } from '../../users/Inputs/Input'

export default function Inicio(){
    return(
        <main className={styles.container}>

            <img 
                className={styles.imagemCapa}
                src="public\capaInicio.svg" 
                alt="Imagem de uma navio cheio de conteiners navegando junto a um rebocador" 
            />

            <section>

                <article>

                    <div className={styles.descricao}>

                        <img 
                            src="public\logoSispar.svg" 
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
                            
                            <a href="">Esqueci minha senha</a>

                        </div>

                        <div className={styles.box}>

                            <Button 
                                texto="Entrar"
                                className="azulEscuro"
                            />

                            <Button 
                                texto="Criar conta"
                                className="azulClaro"
                            />

                        </div>

                    </form>

                </article>

            </section>

        </main>
    )
}