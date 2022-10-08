import Card from '../Card'
import person4 from './../../assets/4.png'
import person5 from './../../assets/5.png'

import {
  Container,
  Box
} from './styles'

function ProblemsAndSolutions() {
  return (
    <>
      <Container>
        <Box>
          <h1>Você enfrenta algum desses problemas ?</h1>
          <Card />
          <Card />
          <Card />
        </Box>
        <Box>
          <img src={person4} alt="" />
        </Box>
      </Container>
      <Container>
        <Box>
          <img src={person5} alt="" />
        </Box>
        <Box>
          <h1>A delibox pode ajudar o seu delivery</h1>
          <Card />
          <Card />
          <Card />
        </Box>
      </Container>
    </>

  )
}

export default ProblemsAndSolutions