import styled, { StyledComponent } from "styled-components";

export const HomeView: StyledComponent<"div", any, {}, never> = styled.div`
  .home-container {
    pointer-events: none;

    .main-head {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(1, 0.8);
      /* padding: 1rem; */

      letter-spacing: -4vw;
      font-size: 30vw;
      font-weight: 700;

      line-height: 0.7;

      color: ${(props) => props.theme.colors.main_orange};

      /* background: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.main_orange},
        orange
      );

      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      */
    }

    .sub-head {
      position: absolute;
      top: 70%;
      padding: 1em;
      letter-spacing: -0.05em;

      transform: scale(1, 0.8);
      font-weight: 500;
      line-height: 1em;
      font-size: 1rem;

      color: ${(props) => props.theme.colors.main_orange};
    }
  }

  @media screen and (min-width: 768px) {
    .home-container {
      .main-head {
        /* transform: translate(-50%, -50%); */
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
