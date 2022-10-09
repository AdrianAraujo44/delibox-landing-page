import pizzaria from '../../assets/pizzaria.png'
import hanburgueria from '../../assets/hanburgueria.png'
import acaiteria from '../../assets/acaiteria.png'

import {
  Container,
  Box,
  Row
} from './styles'

function Models() {
  return (
    <Container id="examples">
      <h1>Estabelecimentos modelos</h1>
      <Row>
        <Box>
          <img src={pizzaria} alt="" />
          <span>Pizzaria</span>
        </Box>
        <Box>
          <img src={acaiteria} alt="" />
          <span>Açaiteria</span>
        </Box>
        <Box>
          <img src={hanburgueria} alt="" />
          <span>Hanburgueria</span>
        </Box>
      </Row>
    </Container>
  )
}

export default Models