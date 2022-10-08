import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px;
  
  img {
    width: 55px;
    height: 55px;
  }

  .links {
    display: flex;
    li {
      display: inline-block;
      margin-left: 20px;
      font-size: 20px;
      color: #10B981;
      cursor: pointer;

      :first-child {
        padding: 7px;
        background-color: #10B981;
        color: #fff;
        border-radius: 6px;
        svg  {
          margin-right: 5px;
          margin-bottom: -3px;
        }
        :hover {
          background-color: #0dab77;
          transition: ease;
          color: #fff;
          border: none;
        }
      }

      :hover {
        color: #0dab77;
        transition: ease;
        border-bottom: 2px solid #10B981
      }
    }
  }
`