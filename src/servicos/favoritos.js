import axios  from "axios"
const favoAPI =axios.create({baseURL:"https://api01-livraria.onrender.com/favoritos"})


// código omitido…
async function favoritosconnected(){
  const response = await favoritosconnected.get('/')
  return response.data
}

async function getFavoritos() {

  const response = await favoAPI.get('/all')

  return response.data

}

export {favoritosconnected,
getFavoritos
}
