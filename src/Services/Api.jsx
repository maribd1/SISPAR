//Importa a biblioteca axios, que é usada para fazer requisições HTTP.
import axios from "axios";

//Criando uma instância de axios, chamada "api"
const api = axios.create({
    baseURL: "http://localhost:5000", //Define a url base para todas as requisições feitas com essa instância
})

export default api;