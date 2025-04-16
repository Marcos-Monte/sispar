// Importando Lib axios -> Usada para fazer requisições http
import axios from 'axios';
let baseURL;

switch (location.hostname) {
    case "localhost" :
        baseURL = "https:localhost:5000";
        break;
    case "vcpodesaude.com.br":
        baseURL = "https:localhost:5000";
        break;
    default:
        baseURL = "https:localhost:5000/";
        break;
}

// Criando instancia personalizada do axios
const api = axios.create({
    baseURL,
});

export default api;