

import { Link } from 'react-router-dom'
import AppLogo from './Componentes_header/Logo'
import AppMenu from './Componentes_header/Menu'

import AppMenuIcons from'./Componentes_header/Menuicons'

import styled from 'styled-components'

const AppHeaderContainer = styled.header`
    background-color: #282c34;
    min-height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`


function Apphader() {
    return(
      <AppHeaderContainer>
      <Link to='/'>
          <AppLogo />
        </Link>
        <AppMenu />
        <AppMenuIcons/>
      </AppHeaderContainer>
    );
}

export default Apphader;
