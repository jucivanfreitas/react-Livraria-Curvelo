import imglogo from '../../../img/logo.svg'
import styled from 'styled-components';

const LogoContainer = styled.div`
  display:  flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  padding: 0 10px;
  margin: 5px;
  `
const ImgLogoContainer =styled.img`
  width: 50px;
  height: 50px;
  margin: 0 15px;
`

function AppLogo() {
    return(

    <LogoContainer >
          <ImgLogoContainer src={imglogo} alt="logo" className='img-logo' />
          <p>
          <strong>Curvelo</strong>Books
          </p>
    </LogoContainer>


    )
}

export default AppLogo
