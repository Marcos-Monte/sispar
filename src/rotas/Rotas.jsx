// Import de Elementos para trabalhar com Rotas
import { Route, Routes } from "react-router-dom";
// Paginas
import Cadastro from "../pages/Cadastro/Cadastro.jsx";
import Home from "../pages/Home/Home.jsx";
import Login from "../pages/Login/Login.jsx";
import NovaSenha from "../pages/NovaSenha/NovaSenha.jsx";


            {/*  */}

export default function Rotas(){
    return (
            // Seleciona uma única rota para exibir na tela
            <Routes>
                {/* Associa um componente a uma rota, tendo como o 'exact' a  */}
                <Route exact path='/' element={<Login />}/> 
                <Route path='/home' element={<Home />}/>
                <Route path='/cadastro' element={<Cadastro />}/>
                <Route path='/novasenha' element={<NovaSenha />}/>
                
            </Routes>

    )
}

// OBS: A LAG LINK, será usada como uma tag 'envolvente' que garante que a aplicação seja uma SPA