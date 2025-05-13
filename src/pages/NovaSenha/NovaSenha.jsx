import Logo from '../../assets/Login/logo-ws.png'
import styles from './NovaSenha.module.scss'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from '../../components/users/Inputs/Input'

import { Button } from '../../components/users/Buttons/Button'
import api from '../../services/Api'



export default function Cadastro(){

    const navigate = useNavigate();
    const local = JSON.parse(localStorage.getItem('colaborador'))

    const [email, setEmail] = useState(local.email)
    const [senha, setSenha] = useState('')
    const [senhaConfirm, setSenhaConfirm] = useState('')

    const [mostrarSenha, setMostrarSenha] = useState(false)

    async function updateColaborador(event){
        event.preventDefault()

        try {
            if(senha !== senhaConfirm){
                alert('As senhas devem ser iguais!');
                return;
            }

            const colaborador = {
                email: email,
                senha: senha
            }

            await api.put(`/colaborador/atualizar/${email}`, colaborador);
            localStorage.setItem('emailJaCadastrado', colaborador.email)
            alert('Senha atualizada com sucesso!')
            setTimeout(()=>{
                localStorage.removeItem('colaborador')
                navigate('/')
            }, 2000)

        } catch (error) {
            console.error('Não foi possível atualizar a senha: ', error);
            const mensagem = error?.response?.data?.erro || 'Erro desconhecido ao atualizar colaborador.'
            alert(mensagem)
            
        } 
    }

    return(
        <>
            <section className={styles.container}>
                <form className={styles.form}>
                    <img src={Logo} alt="Logo da WS." />
                    <h3>Cadastre uma senha!</h3>
                    <div className={`${styles.box} ${styles.mask}`}>

                        <Input 
                            value={email}
                            type="text"
                            name="email"
                            readOnly
                        />
                    </div>

                    <div className={styles.box}>
                        <label>Nova Senha</label>
                        <div className={styles.senha}>
                            <Input 
                                placeholder="Digite sua senha de preferencia."
                                type={mostrarSenha? 'text': 'password'}
                                value={senha}
                                name="senha"
                                onChange={(e) => setSenha(e.target.value)}
                                autoComplete="new-password"
                            />
                            <button type="button" onClick={() => setMostrarSenha(!mostrarSenha)}>
                                {mostrarSenha ? <i className="bi bi-eye"></i>: <i className="bi bi-eye-slash"></i>}
                            </button>
                        </div>
                    </div>

                    <div className={styles.box}>
                        <label>Confirme a Nova Senha</label>
                        <div className={styles.senha}>
                            <Input 
                                placeholder="Confime sua senha."
                                type={mostrarSenha? 'text': 'password'}
                                value={senhaConfirm}
                                name="senhaConfirm"
                                onChange={(e) => setSenhaConfirm(e.target.value)}
                                autoComplete="new-password"
                            />
                            <button type="button" onClick={() => setMostrarSenha(!mostrarSenha)}>
                                {mostrarSenha ? <i className="bi bi-eye"></i>: <i className="bi bi-eye-slash"></i>}
                            </button>
                        </div>
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
                            funcao={(event) => updateColaborador(event)}
                        >
                            Confirmar
                        </Button>
                    </div>
                </form>
            </section>
        </>
    )
}