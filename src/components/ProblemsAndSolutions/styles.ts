import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 200px;
  justify-content: space-around;
  align-items: flex-start;
  padding: 30px;
  gap: 20px;
  flex-wrap: wrap;
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  h1 {
    font-size: 30px;
    color: #10B981;
    font-weight: bold;
  }
  img {
    width: 100%;
    object-fit: contain;
  }
`