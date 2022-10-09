import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 100px;

  h1 {
    color: #10B981;
    text-align: center;
  }

  @media screen and (max-width: 540px) {
    margin-top: 40px;
  }

`

export const Row = styled.div`
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 540px) {
    gap: 10px;
  }
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  img {
    width: 120px;
    height: 120px;
  }

  @media screen and (max-width: 540px) {
    img {
      width: 100px;
      height: 100px;
    }
  }
`