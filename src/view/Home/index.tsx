import Banner from "../../components/Banner"
import CommomQuestions from "../../components/CommonQuestions"
import Example from "../../components/Examples"
import Functionalities from "../../components/Functionalities"
import Navbar from "../../components/Navbar"
import ProblemsAndSolutions from "../../components/ProblemsAndSolutions"

import { 
  Container,
} from "./styles"

function Home () {
  return (
    <Container>
      <Navbar />
      <Banner />
      <ProblemsAndSolutions />
      <Functionalities />
      <Example />
      <CommomQuestions />
    </Container>
    
  )
}

export default Home