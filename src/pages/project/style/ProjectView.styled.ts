import styled from "styled-components";
// import { styled } from "@mui/material/styles";

export const ProjectView = styled.div<{
  theme: { start: string; end: string; text: string; hoverText: string };
}>`
  min-height: 96vh;
  max-width: 870px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 40px auto;

  .project-container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    grid-gap: 2em;

    /* display: flex;

    flex-wrap: wrap; */
  }

  .item {
    width: 250px;
    height: 250px;
  }

  /* .item > .item-content {
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
  } */

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
/* 
    .item > .item-content {
      background: linear-gradient(
        100deg,
        ${(props) => props.theme.start},
        ${(props) => props.theme.end}
      );
      color: ${(props) => props.theme.text};
      font-weight: 700;
      font-size: 1em;

      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0em;
    } */
  }
`;
