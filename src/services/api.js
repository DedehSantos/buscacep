import axios  from 'axios';

// cconsultar a api dos correios
const api = axios.create({
baseURL: "https://viacep.com.br/ws/"
});

export default api;