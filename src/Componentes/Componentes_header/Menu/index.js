
import styled from 'styled-components'

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

const MenuItems = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']


function AppMenu() {
    return(
                <MenuContainer>
                    { MenuItems.map ( (texto) => (
                        <MenuItemContainer><p>{texto}</p>
                        </MenuItemContainer>
                    ) ) }
                </MenuContainer>
    )
}

export default AppMenu
