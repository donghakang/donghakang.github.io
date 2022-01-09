import styled from "styled-components";

export const StyledProjectItem = styled.div<{
  theme: { start: string; end: string; text: string; hoverText: string };
  background: string;
}>`
  background: linear-gradient(
    100deg,
    ${(props) => props.theme.start},
    ${(props) => props.theme.end}
  );

  color: ${(props) => props.theme.text};
  font-weight: 700;
  font-size: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  text-align: center;

  width: 100%;
  height: 100%;
  border-radius: 1em;


  &:hover {
    background-image: url(${(props) => props.background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  @media screen and (max-width: 870px) {
    background: url(${(props) => props.background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: ${(props) => props.theme.start};
    font-weight: 700;
    font-size: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0em;
  }
`;
