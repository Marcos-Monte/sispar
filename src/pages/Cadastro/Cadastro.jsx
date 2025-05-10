import Logo from '../../assets/Login/logo-ws.png'
import styles from './Cadastro.module.scss'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input, Select } from '../../components/users/Inputs/Input'

import { Button } from '../../components/users/Buttons/Button'
import { tiposCargos } from '../../data/opcoes'

import api from '../../services/Api'

export default function Cadastro(){

    const navigate = useNavigate();

    const [mostrarSenha, setMostrarSenha] = useState(true)

    const [imagemSelecionada, setImagemSelecionada] = useState(null)

    const [dadosCadastrais, setDadosCadastrais] = useState({
        nome: '',
        email: '',
        emailConfirm: '',
        senha: '',
        senhaConfirm: '',
        cargo: 'Selec.',
        foto: '',
    })

    function limparCampos(){
        setDadosCadastrais({
            nome: '',
            email: '',
            emailConfirm: '',
            senha: '',
            senhaConfirm: '',
            cargo: 'Selec.',
            foto: '',
        })
    }

    function getCargos(list){
        return list.map((item) => item.cargo)
    }

    function getSalario(list, cargo){
        const resultado = list.find(item => 
            item.cargo.toLowerCase() === cargo.toLowerCase()
        )
        return resultado ? resultado.salario : null
    }

    function uploadImagem(event){
        const file = event.target.files[0];
        setImagemSelecionada(file)
    }

    async function submitCadastro(){
        event.preventDefault()

        try {

            if(dadosCadastrais.email !== dadosCadastrais.emailConfirm){
                alert('E-mail e Confirmação de E-mail devem ser iguais.')
                return
            }

            if(dadosCadastrais.senha !== dadosCadastrais.senhaConfirm){
                alert('Senha e Confirmação de Senha devem ser iguais.')
                return
            }
            const salario = getSalario(tiposCargos, dadosCadastrais.cargo)

            let urlFoto = '';
            
            if(imagemSelecionada){
                const formData = new FormData();
                formData.append('foto', imagemSelecionada);

                const response = await api.post('/colaborador/upload-foto', formData, {
                    headers: {'Content-Type': 'multipart/form-data'}
                })

                urlFoto = response.data.url
            }

            const dados = {
                ...dadosCadastrais,
                salario: salario,
                status: 'ativo',
                foto: urlFoto
            }

            await api.post('/colaborador/cadastrar', dados)
            alert('Colaborador cadastrado com sucesso!')
            setTimeout(()=> {
                limparCampos()
                navigate('/')
            }, 2000)

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
                        value={dadosCadastrais.nome}
                        placeholder="Digite seu nome completo."
                        type="text"
                        name="nome"
                        onChange={event => setDadosCadastrais({
                            ...dadosCadastrais,
                            [event.target.name]: event.target.value
                        })}
                    />
                    <Input 
                        placeholder="Digite seu E-mail de preferência."
                        type="text"
                        value={dadosCadastrais.email}
                        name="email"
                        onChange={event => setDadosCadastrais({
                            ...dadosCadastrais,
                            [event.target.name]: event.target.value
                        })}
                        autocomplete="current-email"
                    />
                    <Input 
                        placeholder="Confirme seu E-mail."
                        type="text"
                        value={dadosCadastrais.emailConfirm}
                        name="emailConfirm"
                        onChange={event => setDadosCadastrais({
                            ...dadosCadastrais,
                            [event.target.name]: event.target.value
                        })}
                        autocomplete="current-email"
                    />

                    <div className={styles.senha}>
                        <Input 
                            placeholder="Digite sua senha de preferencia."
                            type={mostrarSenha? 'text': 'password'}
                            value={dadosCadastrais.senha}
                            name="senha"
                            onChange={event => setDadosCadastrais({
                                ...dadosCadastrais,
                                [event.target.name]: event.target.value
                            })}
                            autoComplete="new-password"
                        />
                        <button type="button" onClick={() => setMostrarSenha(!mostrarSenha)}>
                            {mostrarSenha ? <i class="bi bi-eye-slash"></i> : <i class="bi bi-eye"></i>}
                        </button>
                    </div>

                    <div className={styles.senha}>
                        <Input 
                            placeholder="Confime sua senha."
                            type={mostrarSenha? 'text': 'password'}
                            value={dadosCadastrais.senhaConfirm}
                            name="senhaConfirm"
                            onChange={event => setDadosCadastrais({
                                ...dadosCadastrais,
                                [event.target.name]: event.target.value
                            })}
                            autoComplete="new-password"
                        />
                        <button type="button" onClick={() => setMostrarSenha(!mostrarSenha)}>
                            {mostrarSenha ? <i class="bi bi-eye-slash"></i> : <i class="bi bi-eye"></i>}
                        </button>
                    </div>

                    <Select
                        value={dadosCadastrais.cargo}
                        array={getCargos(tiposCargos)}
                        name="cargo"
                        onChange={event => setDadosCadastrais({
                            ...dadosCadastrais,
                            [event.target.name]: event.target.value
                        })}
                    />

                    <input type="file" accept='image/*' onChange={uploadImagem}/>
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