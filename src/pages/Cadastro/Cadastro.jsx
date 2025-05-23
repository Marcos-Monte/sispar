import Logo from '../../assets/Login/logo-ws.png'
import styles from './Cadastro.module.scss'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input, Select } from '../../components/users/Inputs/Input'

import { Button } from '../../components/users/Buttons/Button'
import { tiposCargos } from '../../data/opcoes'

import api from '../../services/Api'

import { toast } from 'react-toastify'


export default function Cadastro(){

    const navigate = useNavigate();

    const [mostrarSenha, setMostrarSenha] = useState(false)

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
            for(let dado in dadosCadastrais){
                dadosCadastrais[dado] = dadosCadastrais[dado].toLowerCase()
                console.log(dadosCadastrais[dado])
            }

            if(dadosCadastrais.email !== dadosCadastrais.emailConfirm){
                toast.warn('E-mail e Confirmação de E-mail devem ser iguais.')
                return
            }

            if(dadosCadastrais.senha !== dadosCadastrais.senhaConfirm){
                toast.warn('Senha e Confirmação de Senha devem ser iguais.')
                return
            }
            const salario = getSalario(tiposCargos, dadosCadastrais.cargo)

            let urlFoto = '';

            const dados = {
                ...dadosCadastrais,
                salario: salario,
                status: 'ativo',
                foto: ''
            }

            await api.post('/colaborador/cadastrar', dados)

            // Se o retorno acima for que o 'email' já tem cadastro, daqui pra baixo não roda
            if (imagemSelecionada) {
                const reader = new FileReader()
                
                // Envolver a leitura da imagem num "await"
                urlFoto = await new Promise((resolve, reject) => {
                    reader.onloadend = async () => {
                        const base64 = reader.result.split(',')[1] // remove o "data:image/...;base64,"
                        
                        try {
                            const formData = new FormData()
                            formData.append('key', '7fc48a8ea7ef5066715d359bae365c8c')
                            formData.append('image', base64)

                            const uploadResponse = await fetch('https://api.imgbb.com/1/upload', {
                                method: 'POST',
                                body: formData
                            })

                            const uploadData = await uploadResponse.json()
                            resolve(uploadData.data.url) // Pega o link direto da imagem

                        } catch (err) {
                            console.error("Erro ao subir imagem:", err)
                            reject(err)
                        }
                    }

                    reader.readAsDataURL(imagemSelecionada)
                })

                // faz um PUT adicionando a URL da foto armazenada no IMGBB
                await api.put(`/colaborador/atualizar/${dados.email}`, {
                    ...dados,
                    foto: urlFoto
                })
            }
            

            toast.success('Colaborador cadastrado com sucesso!')
            setTimeout(()=> {
                limparCampos()
                navigate('/')
            }, 2000)

        } catch (error) {
            console.error('Não foi possível cadastrar o colaborador: ', error);
            const mensagem = error?.response?.data?.erro || 'Erro desconhecido ao cadastrar colaborador.'

            if(mensagem.includes('E-mail') && mensagem.includes('já cadastrado')){
                localStorage.setItem('emailJaCadastrado', dadosCadastrais.email)

                toast.warn(`${mensagem}\n\nRedirecionando para tela de login. Caso tenha esquecido sua senha, clique em "Esqueci minha senha".`);
                navigate('/')

            } else {
                toast.error(mensagem)
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
                            {mostrarSenha ? <i className="bi bi-eye"></i>: <i className="bi bi-eye-slash"></i>}
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
                            {mostrarSenha ? <i className="bi bi-eye"></i>: <i className="bi bi-eye-slash"></i>}
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

                    <div className={styles.imageBox} >
                        <label htmlFor="upload" className={styles.labelUpload}>
                            <i className="bi bi-camera"></i> Clique para enviar imagem
                        </label>
                        <input id="upload" type="file" accept='image/*' onChange={uploadImagem}/>
                    </div>
                    {
                        imagemSelecionada && (
                            <img 
                                src={URL.createObjectURL(imagemSelecionada)} 
                                alt="Prévia da imagem"
                                className={styles.previewImagem} // ou aplique inline: style={{ width: '100px', marginTop: '1rem' }}
                            />
                        )
                    }


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