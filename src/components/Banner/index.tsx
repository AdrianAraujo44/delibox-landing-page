import { useRef } from "react"
import person1 from './../../assets/1.png'
import person2 from './../../assets/2.png'
import person3 from './../../assets/3.png'
import { FormHandles } from "@unform/core"
import InputForm from "../Form/InputForm"
import { Container, Form } from "./styles"
import { api } from "../../services/api"
const email = import.meta.env.VITE_EMAIL
import { toast } from 'react-toastify'


function Banner () {
  const formRef = useRef<FormHandles>(null)

  function onlynumber(evt:any) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /^[0-9.]+$/;
    if( !regex.test(key) ) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }

  const handlerSubmit = async(whatsapp:string) => {
    try {
      if(whatsapp.trim().length > 0 && whatsapp.trim().length == 9) {
        await api.post(`/contact/addWhatsapp`, {whatsapp, email})
        toast.success('Vamos entrar em contato em breve!')
        formRef.current?.reset()
      }else {
        toast.error("Número inválido!")
      }
    }catch(Err) {
      toast.error('Algo de errado aconteceu, tente mais tarde!')
    }
  }

  return (
    <Container>
      <div className="texts">
        <h1>Administre seu <span className="marked">delivery</span> com site próprio e fique longe de comissões abusivas</h1>
        <p>Com a plataforma da delibox seus clientes fazem pedidos direto com você através do site criado com sua marca para anunciar e vender seus produtos. <strong>Obtenha acesso gratuito por 15 dias.</strong></p>
        <Form ref={formRef} onSubmit={(data) => handlerSubmit(data.whatsapp)}>
          <InputForm 
            name="whatsapp"
            label="Whatsapp"
            maxLength={9}
            onKeyPress={(e) => onlynumber(e)}
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