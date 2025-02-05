// Import de Elementos para trabalhar com Rotas
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Paginas
import Inicio from "../pages/Inicio/Inicio";
import Login from "../pages/Login/Login";
import Reembolso from "../pages/Reembolso/Reembolso";

export default function Rotas(){
    return (
        // Sincroniza a Aplicação e a URL
        <BrowserRouter>
            {/* Seleciona uma única rota para exibir na tela */}
            <Routes>
                {/* Associa um componente a uma rota, tendo como o 'exact' a  */}
                <Route exact path='/' element={<Login />}/> 
                <Route path='/inicio' element={<Inicio />}/>
                <Route path='/reembolso' element={<Reembolso />}/>
            </Routes>
        </BrowserRouter>
    )
}

// OBS: A LAG LINK, será usada como uma tag 'envolvente' que garante que a aplicação seja uma SPA