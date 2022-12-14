import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ECECEC;
  align-items: center;

  h1 {
    background-color: #ECECEC;
    font-size: 30px;
    text-align: center;
    text-transform: uppercase;
  };

  .marked {
    color: #10B981;
    display: inline-block;
  }
`

export const SwiperBackground = styled.div`
  padding: 50px;
  background-color: #ECECEC;
  position: relative;
`

export const BgTop = styled.div`
  width: 100%;
  height: 130px;
  margin-top: 120px;
  background: linear-gradient(#fff, #ECECEC);
`

export const BgBottom = styled.div`
  width: 100%;
  height: 130px;
  background: linear-gradient(#ECECEC, #fff);
`