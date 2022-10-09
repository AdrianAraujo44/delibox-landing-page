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
        <a href="https://pizzariamodelo.netlify.app/" target={'_blank'}>
          <Box>
            <img src={pizzaria} alt="" />
            <span>Pizzaria</span>
          </Box>
        </a>

        <a href='https://acaiteria.netlify.app/' target={'_blank'}>
          <Box>
            <img src={acaiteria} alt="" />
            <span>Açaiteria</span>
          </Box>
        </a>

        <a href="https://hamburgueriamodelo.netlify.app/" target={'_blank'}>
          <Box>
            <img src={hanburgueria} alt="" />
            <span>Hanburgueria</span>
          </Box>
        </a>
      </Row>
    </Container>
  )
}

export default Models