import styled from "styled-components";

export const Footer = styled.footer`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    color: ${({ theme }) => theme.colors.main_orange};
    margin: 0.5rem;

    &:hover {
      color: orange;
    }
  }
`;
