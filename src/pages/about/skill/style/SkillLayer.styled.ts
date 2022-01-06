import styled from "styled-components";

export const SkillLayer = styled.div`
  margin-top: 20vh;
  .skill-title {
    /* padding-left: 100px; */
  }

  .skill-section {
    display: flex;

    .skill-canvas {
      margin: 0;
      max-width: 400px;
      canvas {
        max-width: 400px;
        width: 400px;
        height: 400px;
      }
    }
    .skill-content {
      /* background-color: blue; */
      background-color: rgba(240, 248, 255, 0.6);
      border-radius: 1em;
      padding: 1em;

      color: black;
    }
  }

  @media screen and (min-width: 861px) {
    .skill-section {
      .skill-canvas {
      }
      .skill-content {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 640px) {
    margin-top: 8vh;
    .skill-section {
      flex-direction: column;
      .skill-canvas {

        /* margin: auto; */
        canvas {
          width: calc(100vw - 2em);
          height: 50vh;
        }
      }
    }
  }
`;
