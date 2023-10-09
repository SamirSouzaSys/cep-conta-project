const axios = require('axios').default;

const urlViaCep = 'http://viacep.com.br/ws/'
const typeResponse = '/json/'

const fetchCep = async (searchCep: string) => {
    try {
      const response = await axios.get(urlViaCep+searchCep+typeResponse);
      return response;
    } catch (error) {
        console.log(error)
        return false;
    }
  }
export default fetchCep