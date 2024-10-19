import styled from "styled-components";

export const Container = styled.div`
  min-width: 400px;
  margin: 20px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  transition: 0.25s;

  &:hover {
    background-color: black;
    color: white;
  }
`;