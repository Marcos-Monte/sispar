// import Login from "./components/pages/Login/Login.jsx";
import { RenderProvider } from "./contexts/RenderContext.jsx";
import Rotas from "./rotas/Rotas.jsx";

import './global.scss';

// Componente Principal
function App() {

  return (
    <RenderProvider>
      {/* Atribui as Rotas da Aplicação */}
      <Rotas />
    </RenderProvider>
  )
}

export default App;
