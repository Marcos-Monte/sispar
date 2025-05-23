import { Route, Routes } from "react-router-dom";

import Cadastro from "../pages/Cadastro/Cadastro.jsx";
import Home from "../pages/Home/Home.jsx";
import Login from "../pages/Login/Login.jsx";
import NovaSenha from "../pages/NovaSenha/NovaSenha.jsx";

export default function Rotas(){
    return (
        <Routes>
            <Route exact path='/' element={<Login />}/> 
            <Route path='/home' element={<Home />}/>
            <Route path='/cadastro' element={<Cadastro />}/>
            <Route path='/novasenha' element={<NovaSenha />}/>
            
        </Routes>
    )
}
