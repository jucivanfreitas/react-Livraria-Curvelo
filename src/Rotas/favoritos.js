import { useEffect,useState } from 'react';
import styled from 'styled-components'
import {getFavoritos} from '../servicos/favoritos'
import livroImg from '../img/livro.png'



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
const ResultadoContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`

const Resultado = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 20px 0;
   cursor: pointer;
   text-align: center;
   padding: 0 100px;
   p {
       width: 200px;
       color: #FFF;
   }
   img {
       width: 100px;
   }
   &:hover {
       border: 1px solid white;
   }
`

const Titulo = styled.h2`
   color: #FFF;
   font-size: 36px;
   text-align: center;
   width: 100%;
   padding-top: 35px
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
     <div>
       <Titulo>Aqui estão seus livros favoritos</Titulo>
       <ResultadoContainer>
         {
           favoritos.length !== 0 ? favoritos.map(favorito => (
             <Resultado>
               <p>{favorito.nome}</p>
               <img src={livroImg}/>
             </Resultado>
           )) : null
         }
       </ResultadoContainer>
     </div>
   </AppContainer>
 );
}


export default Favoritos
