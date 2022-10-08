import styled from "styled-components";
import { Form as Unform } from '@unform/web'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  padding: 30px;
  flex-wrap: wrap;

  .texts {
    width: 50%;
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
    width: 50%;
    padding: 0px 20px 0px 20px ;

    img {
      height: fit-content;
      width: calc(100% / 3);
      object-fit: cover;
      :nth-child(2) {
        margin-top: 90px;
      }
    }
  }


  @media screen and (max-width: 540px) {
    text-align: justify;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .texts {
      width: 100%;
      margin-top: -50px;
      h1 {
        font-size: 30px;
      }

    }
    .images {
      width: 100%;
      margin-top: 20px;
      display: flex;
      justify-content: center;
      gap: 5px;

        img {
          width: calc(100% / 2.5);
          :nth-child(2) {
            margin-top: 0px;
          }
      }
    }

  }

  @media screen and (min-width: 541px) and (max-width: 1024px) {
    .texts {
      margin-top: 10px;
      h1 {
        font-size: 30px;
      }
      button {
        font-size: 14px;
      }
    }
    .images {
      img {
        width: calc(100% / 2);
        :nth-child(2) {
          display: none;
        }
      }
    }
  }

  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    gap: 0px;
    .texts {
      h1 {
        font-size: 35px;
      }
    }

    .images {
      padding-right: 10px;
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
    display: flex;
    align-items: center;

    :hover {
      background-color: #0DAB77;
      transition: ease;
    }
  }

`