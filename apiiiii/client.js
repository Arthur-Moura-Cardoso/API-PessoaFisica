const axios = require('axios');

axios.get('http://localhost:8080')
  .then(response => {
    console.log('Dados recebidos da API:');
    console.log(response.data);
  })
  .catch(error => {
    console.error('Erro ao fazer requisição à API:', error);
  });
