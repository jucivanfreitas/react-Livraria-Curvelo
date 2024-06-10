import { useEffect,useState } from 'react';
import styled from 'styled-components'
import {getFavoritos} from '../servicos/favoritos'



const AppContainer = styled.div`
  background-color: #A8A8AC;
  background-image: linear-gradient(100deg, #A7B8D1 45%, #f3f8f9);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: top;
  justify-content: top;
  font-size: calc(10px + 2vmin);
  color: white;

`


function Favoritos() {
  const [favoritos,setFavoritos]= useState([])

async function fetchFavoritos(){
   const favoritosdaAPI =await getFavoritos()
   setFavoritos(favoritosdaAPI)
}
  useEffect(()=>{
    fetchFavoritos()
  },[])


  return (
    <AppContainer>
      {
        favoritos.map(favorito => (<p>{favorito.nome}</p>))
      }
    </AppContainer>
  );
}

export default Favoritos
