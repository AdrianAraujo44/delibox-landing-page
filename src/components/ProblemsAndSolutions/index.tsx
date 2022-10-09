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
          <Card
            title="ineficiência ao receber um pedido"
            text="Com vários pedidos ao mesmo tempo fica difícil dar atenção a todos os clientes ocorrendo problemas como troca de pedidos e demora no atendimento.Tudo isso afeta a experiência dos seus clientes e gera menos vendas. "
          />
          <Card
            title={`alto custo com marketplaces`}
            text="Apps como ifood e rappi cobram taxas por pedidos, com isso ao chegar no final do mês você ver grande parte de suas vendas sairem do seu bolso."
          />
          <Card
            title="Falta de informação sobre os produtos"
            text="Muitas das vezes clientes deixam de comprar seus produtos por terem alguma restrição alimentar ou não ter informações suficientes de como aquele alimento foi preparado e quais seus ingredientes."
          />
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
          <Card
            title="pedidos automatizados"
            text="Você recebe pedidos em tempo real e consegue administrar com eficiência graças a nossa plataforma que cuida do seu delivery e do seu cliente para você."
          />
          <Card
            title="livre de taxas"
            text="Não cobramos taxas por pedidos. Sinta-se livre para anúnciar e vender seus produtos com um preço justo e fixo por mês"
          />
          <Card
            title="Cardápio online 100% personalizado"
            text="Você consegue criar um cardápio campeão de vendas com informações que atraiam cada vez mais clientes."
          />
        </Box>
      </Container>
    </>

  )
}

export default ProblemsAndSolutions