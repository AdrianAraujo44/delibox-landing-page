import styled, { css } from "styled-components";

export const Container = styled.div<{isVisible: boolean}>`
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0,0,0,0.80);
  backdrop-filter: blur(3px);
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;
  transform: translateX(-50px);

  a {
    color: #fff;
  }
  
  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    transform: rotate(45deg);
    transition: 0.7s;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transform: scale(0.7);
    transition: .7s;

  }

  ${({isVisible}) => isVisible==true && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateX(0px);

    > svg {
      transform: rotate(0deg);
    }

    nav {
      transform: scale(1);
    }
  `}
`