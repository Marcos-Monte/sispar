// Import de Módulo de Estilização
import styles from './Login.module.scss';
// Import de Imagens
import Logo from '@/assets/Login/logo-ws.png';

// Import de Componentes
import { Button } from '@/components/users/Buttons/Button';
import { Input } from '@/components/users/Inputs/Input';

// Conexão do Front com o Back
import { useEffect, useState } from 'react';
import api from '../../services/Api';

import { getApiError } from '../../services/utils.jsx';

import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

export default function Login(){

    useEffect(() => {
        const emailJaCadastrado = localStorage.getItem('emailJaCadastrado')
        if(emailJaCadastrado){
            setEmail(emailJaCadastrado)
            localStorage.removeItem('emailJaCadastrado')
        }
    }, [])

    const navigate = useNavigate();
    const API_URL = import.meta.env.VITE_API_URL
    
    // Iniciando os estados
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const [colaborador, setColaborador]= useState({})

    const fazerLogin = async (event) => {
        // Prevenir os comportamentos padrão
        event.preventDefault();

        try {
            // Requisição para a API
            const response = await api.post('/colaborador/login', {
                email: email,
                senha: senha,
            })

            const dados = response.data.items

            const usuario = {
                id: dados.id,
                email: dados.email,
                nome: dados.nome,
                cargo: dados.cargo,
                foto: dados.foto 
            }
            
            localStorage.setItem('user', JSON.stringify(usuario))
            // Se a requisição for bem sucedida enviar para a rota indicada
            navigate('/home')
            
        } catch (error) {
            const erro = getApiError(error)
            console.log('erro: ', erro)
            console.error('Não foi possível fazer o Login: ', erro || error?.message || error);
            toast.error(erro)

        }

    }

    const handleSenha = async () => {
        try {
            if(!email){
                toast.warn('Preencha o campo de e-mail para recuperação de senha');
                return;
            }

            const response = await api.get(`/colaborador/buscar/${email}`);

            setColaborador(response.data.colaborador)

            localStorage.setItem('colaborador', JSON.stringify(response.data.colaborador))
            setTimeout(() => navigate('/novasenha'), 3000)

        } catch (error) {
            const erro = getApiError(error)
            console.log('Não foi possível solicitar nova senha: ',  erro || error?.message || error)
            toast.error(erro)
        }
    }

    return(
        <main className={styles.container}>

            <section className={styles.imagemCapa}> 

            </section>

            <section className={styles.login}>

                <div className={styles.descricao}>

                    <img 
                        src={Logo} 
                        alt="Logo da Wilson Sons" 
                    />

                    <h2>Boas Vindas ao</h2>
                    <h2>Novo Portal SISPAR</h2>
                    <p>Sistema de Emissão de Boletos e Parcelamento</p>

                </div>

                <form onSubmit={fazerLogin}>

                    <div>
                        <Input 
                            placeholder='Email'
                            type='email'
                            value = {email}
                            onChange={(event) => setEmail(event.target.value)}
                            autocomplete="current-email"
                        />
                        <Input 
                            placeholder='Senha'
                            type='password'
                            value ={senha}
                            onChange={(event) => setSenha(event.target.value)}
                            autocomplete="current-password"
                        />
                        {/* Envia para pagina de recuperação de senha */}
                        
                        <span className={styles.link} onClick={handleSenha}><p>Esqueceu a senha? Digite seu e-mail e </p>clique aqui!</span>

                    </div>

                    <div className={styles.box}>

                        <Button 
                            tipo='container'
                            texto="Entrar"
                            cor="azulEscuro"
                            typeButton="submit"
                        >
                            Entrar
                        </Button>

                        <Button 
                            tipo='container'
                            texto="Criar conta"
                            cor="azulClaro"
                            rota="/cadastro"
                        >
                            Criar conta
                        </Button>

                    </div>

                </form>

            </section>
            

        </main>
    )
}