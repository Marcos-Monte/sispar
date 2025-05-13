import Logo from '../../assets/Login/logo-ws.png'
import styles from './NovaSenha.module.scss'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from '../../components/users/Inputs/Input'

import { Button } from '../../components/users/Buttons/Button'



export default function Cadastro(){

    const navigate = useNavigate();
    const local = JSON.parse(localStorage.getItem('colaborador'))

    const [colaborador, setColaborador] = useState(local)

    async function submitCadastro(){
        event.preventDefault()

        try {

            console.log('Aqui')

        } catch (error) {
            console.error('Não foi possível cadastrar o colaborador: ', error);
            const mensagem = error?.response?.data?.erro || 'Erro desconhecido ao cadastrar colaborador.'

            if(mensagem.includes('E-mail') && mensagem.includes('já cadastrado')){
                localStorage.setItem('emailJaCadastrado', dadosCadastrais.email)

                alert(`${mensagem}\n\nRedirecionando para tela de login. Caso tenha esquecido sua senha, clique em "Esqueci minha senha".`);
                navigate('/')

            } else {
                alert(mensagem)
            }
            
        } 
    }

    return(
        <>
            <section className={styles.container}>
                <form className={styles.form}>
                    <img src={Logo} alt="Logo da WS." />
                    <h3>Faça seu cadastro</h3>
                    <Input 
                        value={colaborador.email}
                        type="text"
                        name="email"
                        disabled
                    />

                    <div className={styles.senha}>
                        <Input 
                            placeholder="Digite sua senha de preferencia."
                            value={colaborador.senha}
                            name="senha"
                            autoComplete="new-password"
                        />
                    </div>

                    <div className={styles.senha}>
                        <Input 
                            placeholder="Confime sua senha."
                            value={colaborador.senhaConfirm}
                            name="senhaConfirm"
                            autoComplete="new-password"
                        />
                    </div>

                    <div className={styles.botoes}>
                        <Button 
                            tipo='container'
                            cor="cinza"
                            rota="/"
                        >
                            Voltar
                        </Button>
                        <Button 
                            tipo='container'
                            texto="Criar conta"
                            cor="azulClaro"
                            funcao={() => submitCadastro()}
                        >
                            Criar conta
                        </Button>
                    </div>
                </form>
            </section>
        </>
    )
}