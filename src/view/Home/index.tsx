import { useState } from "react"
import Banner from "../../components/Banner"
import CommomQuestions from "../../components/CommonQuestions"
import Example from "../../components/Examples"
import Functionalities from "../../components/Functionalities"
import MenuMobile from "../../components/MenuMobile"
import Navbar from "../../components/Navbar"
import ProblemsAndSolutions from "../../components/ProblemsAndSolutions"

import { 
  Container,
} from "./styles"

function Home () {
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false)
  return (
    <Container>
      <MenuMobile 
        menuIsVisible={menuIsVisible} 
        setMenuIsVisible = {setMenuIsVisible}/>
      <Navbar 
        setMenuIsVisible ={setMenuIsVisible}
      />
      <Banner />
      <ProblemsAndSolutions />
      <Functionalities />
      <Example />
      <CommomQuestions />
    </Container>
    
  )
}

export default Home