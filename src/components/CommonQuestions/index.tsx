import Question from '../Question'
import {
  Container
} from './styles'

function CommomQuestions () {
  return (
    <Container id="FAQ">
      <h1>Perguntas frequentes</h1>
      <Question 
        title='Como vou receber meus pedidos ?'
        answer='Os cliente farão os pedidos e automaticamente será enviado para você na nossa plataforma, lá você consegue avisar seus cliente em tempos real como está o preparo do pedido e tirar possíveis dúvidas e questionamentos, tudo com rapidez e facilidade.'
      />
      <Question 
        title='Tenho total liberdade para montar e gerir meu cardápio ?'
        answer='Sim, sinta-se livre para criar e personalizar seu cardápio. Crie combos, escolha fotos, defina preços, complementos e muitas outras coisas dentro da plataforma. Você pode tambem gerir quanto será a taxa de entrega para cada bairro da sua cidade.'
      />
      <Question 
        title='Sou obrigado a pagar depois dos 15 dias gratuitos ?'
        answer='Não. Por 15 dias você terá total acesso as funcionalidades da plataforma de maneira gratuita e sem compromisso. Após isso sinta-se livre para assinar mensalmente caso deseje.'
      />
    </Container>
  )
}

export default CommomQuestions