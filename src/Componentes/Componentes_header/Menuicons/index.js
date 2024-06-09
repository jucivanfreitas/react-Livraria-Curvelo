import perfil from '../../../img/perfil.svg'
import sacola from '../../../img/sacola.svg'
import styled from 'styled-components';

const IconContainer = styled.li`
    margin-right: 40px;
    width: 25px;
    cursor: pointer;
`

const IconsContainer = styled.ul`
    display: flex;
    align-items: center;
`


const headericons =[perfil,sacola]

function AppMenuIcons() {
    return(
        <IconsContainer>
          {headericons.map ((icone, index)=>(
            <IconContainer key={index} >
            <img src={icone} alt="icone" />
            </IconContainer>
          )
          )}
        </IconsContainer>
    )
}

export default AppMenuIcons
