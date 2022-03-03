import styled from "@emotion/styled";

export const Footer = styled.footer`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.main_orange};

  a {
    margin: 0.5rem;

    &:hover {
      color: orange;
    }
  }
`;
