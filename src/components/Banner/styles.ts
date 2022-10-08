import styled from "styled-components";
import { Form as Unform } from '@unform/web'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

  .texts {
    width: 100%;
    max-width: 700px;
    margin-top: 50px;
    .marked {
      color: #10B981;
      display: inline-block;
    }

    h1  {
      font-size: 45px;
    }

    p {
      color: #5B5959;
      font-size: 20px;
      line-height: 24px;
      margin-top: 20px;
    }
  } 

  .images {
    display: flex;
    gap: 14px;

    img {
      height: fit-content;
      :nth-child(2) {
        margin-top: 100px;
      }
    }
  }
`

export const Form = styled(Unform)`
  margin-top: 20px;
  display: flex;
  align-items: flex-end;
  gap: 10px;

  button {
    height: 45px;
    border-radius: 6px;
    background-color: #10B981;
    color: #fff;
    border: none;
    padding: 10px;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;

    :hover {
      background-color: #0DAB77;
      transition: ease;
    }
  }
`