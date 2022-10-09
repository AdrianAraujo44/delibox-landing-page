import { useRef } from "react"
import person1 from './../../assets/1.png'
import person2 from './../../assets/2.png'
import person3 from './../../assets/3.png'
import { FormHandles } from "@unform/core"
import InputForm from "../Form/InputForm"

import { Container, Form } from "./styles"

function Banner () {
  const formRef = useRef<FormHandles>(null)

  return (
    <Container>
      <div className="texts">
        <h1>Administre seu <span className="marked">delivery</span> com site próprio e fique longe de comissões abusivas</h1>
        <p>Com a plataforma da delibox seus clientes fazem pedidos direto com você através do site criado com sua marca para anunciar e vender seus produtos. <strong>Obtenha acesso gratuito por 15 dias.</strong></p>
        <Form ref={formRef} onSubmit={(data) => console.log(data)}>
          <InputForm 
            name="whatsapp"
            label="Whatsapp"
          />
          <button type="submit">Quero acessar</button>
        </Form>
      </div>
      <div className="images">
        <img src={person1} alt="" />
        <img src={person2} alt="" />
        <img src={person3} alt="" />
      </div>
    </Container>
  )
}

export default Banner