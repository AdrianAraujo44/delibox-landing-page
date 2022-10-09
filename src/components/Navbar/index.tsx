import logo from './../../assets/logo.png'
import { IoLogoInstagram, IoMenu } from 'react-icons/io5'
import { Link } from 'react-scroll'

import {
  Container
} from './styles'

function Navbar({ setMenuIsVisible }: any) {
  return (
    <Container id="inicio">
      <img src={logo} alt="logo" />
      <div className="links">
        <ul>
          <a href='https://www.instagram.com/deliboox/' target={"_blank"}>
            <li>
              <IoLogoInstagram size={20} />
              instagram
            </li>
          </a>
          <li>
            <Link activeClass="active" to="banner" spy={true} smooth={true} offset={50} duration={500} delay={100}>
              Início
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="funcionalities" spy={true} smooth={true} offset={-20} duration={500} delay={100}>
              Funcionalidades
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="examples" spy={true} smooth={true} offset={-20} duration={500} delay={100}>
              Modelos
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="FAQ" spy={true} smooth={true} offset={-20} duration={500} delay={100}>
              FAQ
            </Link>
          </li>
          <li><a href="https://portaldelibox.netlify.app" target={'_blank'}>Login</a></li>
          <li className='menu' >
            <IoMenu size={30} onClick={() => setMenuIsVisible(true)} />
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default Navbar