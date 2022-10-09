import { useEffect } from 'react'
import { IoClose } from 'react-icons/io5'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import {
  Container
} from './styles'

interface IMenuMobile {
  menuIsVisible: any,
  setMenuIsVisible: any
}

function MenuMobile({ menuIsVisible, setMenuIsVisible }:IMenuMobile) {

  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto'
  }, [menuIsVisible])

  return (
    <Container isVisible={menuIsVisible} >
      <IoClose size={40} onClick={() => setMenuIsVisible(false)}/>
      <nav>
        <Link activeClass="active" to="banner" spy={true} smooth={true} offset={50} duration={500} delay={100} onClick={() => setMenuIsVisible(false)}>Ínicio</Link>
        <Link activeClass="active" to="funcionalities" spy={true} smooth={true} offset={-20} duration={500} delay={100} onClick={() => setMenuIsVisible(false)}>Funcionalidades</Link>
        <Link activeClass="active" to="examples" spy={true} smooth={true} offset={-20} duration={500} delay={100} onClick={() => setMenuIsVisible(false)}>Modelos</Link>
        <Link activeClass="active" to="FAQ" spy={true} smooth={true} offset={-20} duration={500} delay={100} onClick={() => setMenuIsVisible(false)}>FAQ</Link>
        <a href="https://portaldelibox.netlify.app" target={'_blank'}>Login</a>
      </nav>
    </Container>
  )
}

export default MenuMobile