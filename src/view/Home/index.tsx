import Banner from "../../components/Banner"
import Example from "../../components/Examples"
import Navbar from "../../components/Navbar"
import ProblemsAndSolutions from "../../components/ProblemsAndSolutions"
import { 
  Container
} from "./styles"

function Home () {
  return (
    <Container>
      <Navbar />
      <Banner />
      <ProblemsAndSolutions />
      <Example />
    </Container>
    
  )
}

export default Home