import styled from "styled-components";

export const SkillLayer = styled.div`
  height: 60vh;

  /* background-color: gray; */

  .skill-title {
    padding-left: 100px;
    color: black;
  }

  .skill-section {
    display: flex;
    width: 960px;
    height: 100%;

    .skill-canvas {
      margin: 0;
    }
    .skill-content {
      /* background-color: blue; */
      height: 100%;
      color: black;
    }
  }

  h1 {
    font-weight: 700;
  }
  @media screen and (min-width: 861px) {
    .skill-section {
      .skill-canvas {
      }
      .skill-content {
        min-width: 540px;
      }
    }
  }

  @media screen and (max-width: 860px) {
    width: 100vw;
    margin-bottom: 30vh;

    .skill-title {
      padding: 1em;
    }

    .skill-section {
      flex-direction: column;
      width: inherit;
      .skill-canvas {
        margin: 0;
        width: 100%;
        min-height: 300px;
        /* background-color: aquamarine; */
      }
      .skill-content {
        /* background-color: blue; */
        height: 100%;
        min-height: 50vh;
        padding: 1em;

        .content-title {
          /* background-color: red; */
        }
        .content-body {
          /* background-color: aliceblue; */
        }
      }
    }
  }
`;
