import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px;
/*   position: fixed; */
/*   background-color: #10B981; */
  /* background-color: #fff;
  border-bottom: 1px solid gray;
  z-index: 10; */

  img {
    width: 55px;
    height: 55px;

    @media screen and (max-width: 540px) {
      width: 40px;
      height: 40px;
    }
  }

  .links {
    display: flex;
    li {
      display: inline-block;
      margin-left: 20px;
      font-size: 20px;
      color: #10B981;
      cursor: pointer;

      a {
        color: #10B981;
      }

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

    @media screen and (max-width: 900px){
      ul {
        display: flex;
      }
      li {
        display: none;
        :hover {
          border: none;
        }

        :first-child {
          display: flex;
          align-items: center;
          font-size: 14px;

          svg {
            height: 15px;
            width: 15px;
            margin-top: -2px;
          }
        } 
      }
     
    }

    .menu {
      display: none;

      @media screen and (max-width: 900px){
        display: block;
      }
    }
  }
`