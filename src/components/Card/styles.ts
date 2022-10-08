import styled from "styled-components";

export const Container = styled.div`
  padding: 25px;
  border-radius: 20px;
  border: 1px solid #D0C8C8;
  max-width: 380px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  
  h2 {
    font-size: 18px;
    font-weight: bold;
    line-height: 24px;
  }

  p {
    font-size: 16px;
    text-align: justify;
  }

  :nth-child(3) {
    margin-left: 150px;
  }

  @media screen and (max-width: 500px) {
    :nth-child(3) {
      margin-left: 0px;
    }
  }

  @media screen and (max-width: 1070px) {
    :nth-child(3) {
      margin-left: 0px;
    }
  }
`