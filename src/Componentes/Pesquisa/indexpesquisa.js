
import styled from 'styled-components'
import ImputContainer from '../Imput';
import { useEffect, useState } from 'react';
import {getLivros, connected} from '../../servicos/livros'



const PesquisarContainer = styled.section`
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
  color: #FFF;
  text-align: center;
  padding: 1px 0;
  height: 180px;
  margin-bottom: 1px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
`
const Titulo = styled.h2`
  color: #FFF;
  font-size: 26px;
  padding: 1px 0;
  text-align: center;

`

const Subtitulo = styled.h3`
  font-size: 16px;
  padding: 1px 0;
  font-weight: 400;
  margin-bottom: 1px;
  text-align: center;

`
const Resultado = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: top;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 200px;
    }
    &:hover {
        border: 1px solid white;
    }
`
const Contlivro = styled.ul`
display: flex;
    flex-direction: row;
    justify-content: top;
    align-items: center;
`

function  Pesquisa() {
  const [Livrospesquisados, setLivrospesquisados] = useState([])
  const [livros, setLivros] = useState([])

  useEffect(() =>{
    fetchLivros()
  },[]) //mantem os dados disponíveis no ato do carregamento da pagina

  async function fetchLivros(){
    const livrosdaAPI = await getLivros()
    setLivros(livrosdaAPI)
  }


  return (
    <PesquisarContainer>
      <Titulo>Pesquisar uma Obra</Titulo>
      <ImputContainer placeholder="Digite o nome do livro ou autor" onBlur={(evento) => {
        const textoDigitado = evento.target.value
        const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado) )
        setLivrospesquisados(resultadoPesquisa)
      }
      } />
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      { Livrospesquisados.map( livro => (
                <Resultado>
                    <Contlivro >
                      <li><img src={livro.src}/></li>
                      <li><p>{livro.nome}</p></li>
                    </Contlivro>
                </Resultado>
            )) }
    </PesquisarContainer>

  )
}

export default Pesquisa;
