import logo from './../../assets/logo.png'
import { IoLogoInstagram, IoMenu } from 'react-icons/io5'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import {
  Container
} from './styles'

function Navbar({setMenuIsVisible}: any) {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <div className="links">
        <ul>
          <li>
            <IoLogoInstagram size={20} />
            instagram
          </li>
          <li>
            <Link activeClass="active" to="banner" spy={true} smooth={true} offset={50} duration={500} delay={100}>
              ínicio
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
          <li><a>Login</a></li>
          <li className='menu' >
            <IoMenu size={30} onClick={() => setMenuIsVisible(true)}/>
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default Navbar