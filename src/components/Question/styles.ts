import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.div<{showAnswer:boolean}>`
  border-radius: ${props => props.showAnswer ? "6px 6px 0px 0px": "6px"};
  background-color: #F2F2F2;
  padding: 15px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 700px;
  max-width: 700px;
  width: 100%;
  cursor: pointer;
`

export const Answer = styled.div`
  min-width: 700px;
  max-width: 700px;
  width: 100%;
  height: fit-content;
  padding: 20px;
  border: 2px solid #F2F2F2;
  border-radius: 0px 0px 6px 6px;
`