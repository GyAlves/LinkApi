import axios from 'axios';

const blingApi = axios.create({
  baseURL:
    'https://bling.com.br/Api/v2/pedidos/json/&apikey=7a1e09d1b8cc8abeebc5333d5d9eb8baabbfebf35e3445e3c7d8ae989362c6e82a3395bc',
});

export default blingApi;
