import Banner from "../../components/Banner"
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
    </Container>
    
  )
}

export default Home