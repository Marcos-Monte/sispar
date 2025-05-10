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

    const [dadosCadastrais, setDadosCadastrais] = useState({
        nome: '',
        email: '',
        emailConfirm: '',
        senha: '',
        senhaConfirm: '',
        cargo: 'Selec.',
    })

    function limparCampos(){
        setDadosCadastrais({
            nome: '',
            email: '',
            emailConfirm: '',
            senha: '',
            senhaConfirm: '',
            cargo: 'Selec.',
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

    async function submitCadastro(){
        event.preventDefault()

        try {
            const salario = getSalario(tiposCargos, dadosCadastrais.cargo)

            const dados = {
                ...dadosCadastrais,
                salario: salario,
                status: 'ativo'
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
            alert(mensagem)
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
                    <Input 
                        placeholder="Digite sua senha de preferencia."
                        type="password"
                        value={dadosCadastrais.senha}
                        name="senha"
                        onChange={event => setDadosCadastrais({
                            ...dadosCadastrais,
                            [event.target.name]: event.target.value
                        })}
                        autoComplete="new-password"
                    />
                    <Input 
                        placeholder="Confime sua senha."
                        type="password"
                        value={dadosCadastrais.senhaConfirm}
                        name="senhaConfirm"
                        onChange={event => setDadosCadastrais({
                            ...dadosCadastrais,
                            [event.target.name]: event.target.value
                        })}
                        autoComplete="new-password"
                    />
                    <Select
                        value={dadosCadastrais.cargo}
                        array={getCargos(tiposCargos)}
                        name="cargo"
                        onChange={event => setDadosCadastrais({
                            ...dadosCadastrais,
                            [event.target.name]: event.target.value
                        })}
                    />
                    <Button 
                        tipo='container'
                        texto="Criar conta"
                        cor="azulClaro"
                        funcao={() => submitCadastro()}
                    >
                        Criar conta
                    </Button>
                </form>
            </section>
        </>
    )
}