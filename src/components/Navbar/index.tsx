import logo from './../../assets/logo.png'
import { IoLogoInstagram } from 'react-icons/io5'

import{
  Container
} from './styles'

function Navbar () {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <div className="links">
        <ul>
          <li>
            <IoLogoInstagram size={20}/>
            instagram
          </li>
          <li>Ínicio</li>
          <li>Funcionalidades</li>
          <li>Exemplos</li>
          <li>FAQ</li>
          <li>Login</li>
        </ul>
      </div>
    </Container>
  )
}

export default Navbar