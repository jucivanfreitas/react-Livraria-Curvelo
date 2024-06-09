import axios from "axios";

const livrosAPI = axios.create({baseURL:"https://api01-livraria.onrender.com/"})

// código omitido…
function connected(){
  const response = livrosAPI.get('/')
  return response.data
}

function getLivros() {
  const response = livrosAPI.get('/all')
  return response.data
}

export {
  connected, getLivros
}
