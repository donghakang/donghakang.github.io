import styled from "styled-components";

interface AboutViewProps {
  H1: string;
}

export const AboutView = styled.div<AboutViewProps>`
  line-height: 1.6em;
  color: black;
  h1 {
    /* text-shadow: 1px 1px 2px  ${({ H1 }) => H1}; */
    letter-spacing: -0.3;
    font-weight: 700;
    line-height: 1em;
  }

  .layer {
    width: 100%;
    max-width: 860px;
    padding: 1em;
  }
`;
