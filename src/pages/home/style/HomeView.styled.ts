import styled, { StyledComponent } from "styled-components";

export const HomeView: StyledComponent<"div", any, {}, never> = styled.div`
  .home-container {
    .main-head {
      position: absolute;
      transform: translate(-50%, -50%) scale(1, 0.8);
      top: 50%;
      left: 50%;

      letter-spacing: -4vw;
      font-size: 30vw;
      font-weight: 700;

      line-height: 0.7;
    }

    .sub-head {
      position: absolute;
      top: 70%;
      padding: 1em;
      letter-spacing: -0.05em;

      font-style: italic;
      font-weight: 500;
      line-height: 1em;
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 640px) {
    .home-container {
      .main-head {
        transform: translate(-50%, -50%);
        font-size: 12vw;
        letter-spacing: -1.75vw;

        br {
          display: none;
        }
      }
      .sub-head {
        position: absolute;
        top: 70%;
        left: 16%;
        letter-spacing: -0.05em;
        
        padding: 0;
      }
    }
  }
`;
