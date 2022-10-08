import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 200px;
/*   justify-content: space-around; */
  align-items: center;
  padding: 30px;
/*   gap: 20px; */
  flex-wrap: wrap;
  width: 100%;
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 50%;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 30px;
    color: #10B981;
    font-weight: bold;
    text-align: center;
  }
  img {
    width: 90%;
    object-fit: contain;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    img {
      display: none;
    }
  }
`