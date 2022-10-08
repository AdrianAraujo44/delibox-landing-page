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
  }
`

export const Row = styled.div`
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
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
`