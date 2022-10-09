import {
  Container
} from './styles'

interface ICard {
  title:string, 
  text: string
}

function Card ({title, text}: ICard) {
  return (
    <Container>
      <h2>{title}</h2>
      <p>{text}</p>
    </Container>
  )
}

export default Card