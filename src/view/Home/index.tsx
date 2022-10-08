import Banner from "../../components/Banner"
import Navbar from "../../components/Navbar"
import { 
  Container
} from "./styles"

function Home () {
  return (
    <Container>
      <Navbar />
      <Banner />
    </Container>
    
  )
}

export default Home