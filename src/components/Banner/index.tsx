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
        <h1>Lorem ipsum dolor sit amet, consectetur <span className="marked">adipiscing</span> elit,  sed do eiusmod</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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