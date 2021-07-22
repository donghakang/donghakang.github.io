import styled from "styled-components";

export const ThemeWrapper = styled.div`
  background-color: ${(props) => props.theme.background.primary};
  color: ${(props) => props.theme.text.primary};
  & a {
    color: ${(props) => props.theme.text.primary};
  }
`;
