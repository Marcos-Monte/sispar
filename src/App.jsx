import { BrowserRouter } from "react-router-dom";
import { RenderProvider } from "./contexts/RenderContext.jsx";
import Rotas from "./rotas/Rotas.jsx";

import { ToastContainer } from 'react-toastify';

import './global.scss';

function App() {

  return (
    // Sincroniza a Aplicação e a URL
      // BrowserRouter está sendo utilizado aqui por conta do 'useLocation' usado dentro de 'RenderProvider'. Ele sempre tem que ficar 'ao redor' de um componente que utiliza dessa ferramenta
    <BrowserRouter>
      <RenderProvider>
        <Rotas />
        <ToastContainer 
            position="top-right"
            autoClose={3000}
            theme="colored"
        />
      </RenderProvider>
    </BrowserRouter>
  )
}

export default App;
