import styled from "styled-components";

export const StyledProjectItem = styled.div<{
  background: string;
}>`
  // Image
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  width: 100%;
  height: 100%;

  // font
  font-weight: 700;
  font-size: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  text-align: center;

  

  @media screen and (max-width: 870px) {
    background: url(${(props) => props.background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0em;
  }
`;
