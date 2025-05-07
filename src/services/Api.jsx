// Importando Lib axios -> Usada para fazer requisições http
import axios from 'axios';
let baseURL;

switch (location.hostname) {
    case "localhost" :
        baseURL = "http://localhost:5000";
        break;
    case "sispar-iota.vercel.app" :
        baseURL = "https://sispar-backend.onrender.com/";
        break;
    default:
        baseURL = "http://localhost:5000";
        break;
}

// Criando instancia personalizada do axios
const api = axios.create({
    baseURL,
});

export default api;