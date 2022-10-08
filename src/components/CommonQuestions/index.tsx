import Question from '../Question'
import {
  Container
} from './styles'

function CommomQuestions () {
  return (
    <Container id="FAQ">
      <h1>Perguntas frequentes</h1>
      <Question 
        title='is simply dummy'
        answer='is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an. is simply dummy text of the printing and typesetting industry.'
      />
      <Question 
        title='is simply dummy'
        answer='is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an. is simply dummy text of the printing and typesetting industry.'
      />
      <Question 
        title='is simply dummy'
        answer='is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an. is simply dummy text of the printing and typesetting industry.'
      />
      <Question 
        title='is simply dummy'
        answer='is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an. is simply dummy text of the printing and typesetting industry.'
      />
    </Container>
  )
}

export default CommomQuestions