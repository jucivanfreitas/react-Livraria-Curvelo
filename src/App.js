import styled from 'styled-components'
import Apphader from './Componentes/header.js'
import Pesquisa from './Componentes/Pesquisa/indexpesquisa.js';

const AppContainer = styled.div`
  background-color: #A8A8AC;
  background-image: linear-gradient(100deg, #b5c6e0 45%, #f3f8f9);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: top;
  justify-content: top;
  font-size: calc(10px + 2vmin);
  color: white;

`


function App() {
  return (
    <AppContainer>
      <Apphader/>
      <Pesquisa/>

    </AppContainer>
  );
}

export default App
