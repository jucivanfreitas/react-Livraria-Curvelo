
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MenuContainer = styled.ul`
display: flex;
`
const MenuItemContainer= styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
    `

const MenuItems = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE']


function AppMenu() {
    return(
                <MenuContainer>
                    { MenuItems.map ( (texto) => (
                        <Link key = {texto} to={`/${texto.toLowerCase()}`}>
                            <MenuItemContainer><p>{texto}</p>
                            </MenuItemContainer>
                        </Link>

                    ) ) }
                </MenuContainer>
    )
}

export default AppMenu
