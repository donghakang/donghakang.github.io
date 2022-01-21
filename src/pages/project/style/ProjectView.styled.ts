import styled from "styled-components";
// import { styled } from "@mui/material/styles";

export const ProjectView = styled.div<{
  theme: { start: string; end: string; text: string; hoverText: string };
}>`
  min-height: 96vh;
  /* max-width: 870px; */
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 40px auto 0 auto;

  .project-container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
  }

  @media screen and (max-width: 870px) {
    margin: 40px auto 0px auto;

    .project-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0;

      width: 100%;
      /* display: flex;

    flex-wrap: wrap; */
    }

    .item {
      width: 100%;
      height: 100%;
    }
  }
`;
