import Slider from '../Slider'

import {
  Container,
  Title,
  SwiperBackground,
  BgTop,
  BgBottom
} from './styles'

function Functionalities () {
  return (
    <>
      <BgTop />
      <Title id="funcionalities" className='funcionalities'>
        <h1>com a delibox você tem mais <span className="marked">facilidade</span> <br/> e <span className="marked">praticidade</span> para o seu delivery</h1>
      </Title>
      <SwiperBackground>
        <div className="top"/>
        <Slider/>
        <div className="bottom"/>
      </SwiperBackground>
      <BgBottom />
    </>
  )
}

export default Functionalities