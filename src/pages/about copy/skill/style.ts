import styled from "styled-components";

export const SkillLayer = styled.div`
background-color: orange;
width: 100vw;
min-height: 100vh;
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
      background-color: ${(props) => props.theme.colors.alternate_blue_6 + "22"};
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
