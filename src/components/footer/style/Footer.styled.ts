
import styled from "styled-components";

export const Footer = styled.footer`
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 120px;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  & > div > span {
    margin-bottom: 12px;
    font-size: 1.25rem;
  }
  a {
    color: darkorange;
  }
`;
