import axios from "axios";

const livrosAPI = axios.create({baseURL:"https://api01-livraria.onrender.com/livros"})

// código omitido…
async function connected(){
  const response = await livrosAPI.get('/')
  return response.data
}

async function getLivros() {
  const response = await livrosAPI.get('/all')
  return response.data
}

export {
  connected, getLivros
}
