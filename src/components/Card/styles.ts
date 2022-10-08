import styled from "styled-components";

export const Container = styled.div`
  padding: 25px;
  border-radius: 20px;
  border: 1px solid #D0C8C8;
  width: 380px;
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
`