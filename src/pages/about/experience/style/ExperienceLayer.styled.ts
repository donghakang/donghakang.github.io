import styled from "styled-components";

export const ExperienceLayer = styled.div`
  margin-top: 20vh;
  .experience-container {
    width: 100%;
  }
  .experience-content {
    display: flex;
    .timeline {
      padding: 1em;
      ul {
        margin: 0;
        padding: 0;

        li {
          display: flex;

          .time {
            display: flex;
            flex-direction: column;
            margin: 0 12px;
            justify-content: center;
            align-items: center;

            .timepoint {
              margin: 8px 0;
              padding: 4px;

              border-style: solid;
              border-radius: 50%;
              border-color: black;
            }

            .time-milestone {
              flex-grow: 1;
              width: 2px;
            }
          }

          .time-title {
            margin-bottom: 20px;
          }

          // hover click
          &:hover {
            .timepoint {
              background-color: ${(props) => props.theme.colors.main_blue};
              border-color: ${(props) => props.theme.colors.main_blue};
            }

            .time-title {
              color: ${(props) => props.theme.colors.obj_3};
            }
          }
        }
      }
    }
    .content {
      background-color: rgba(240, 248, 255, 0.6);
      border-radius: 1em;
      padding: 1em;
      min-height: 40vh;
      width: 60vw;

      .content-title {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        h2 {
          font-weight: 700;
        }
        span {
          font-style: italic;
        }
      }
      .content-body {
        margin-top: 1em;
      }
    }
  }

  @media screen and (max-width: 640px) {
    margin-top: 8vh;
    .experience-content {
      flex-direction: column;
      .timeline {
        width: calc(100vw - 2em);
        padding: 1em 0;
        overflow: hidden;

        ul {
          margin: 0;
          padding: 0;
          white-space: nowrap;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          display: flex;
          flex-direction: reverse;

          li {
            .time {
              display: none;
              .timepoint {
                display: none;
              }
              .time-milestone {
                display: none;
              }
            }
            .time-title {
              margin: 0.44em;
              padding: 0.2em 1em;
              background-color: aliceblue;
              border-radius: 1em;
            }
          }
        }
      }
      .content {
        height: 100%;
        width: inherit;

        .content-title {
          display: flex;
          flex-direction: column;
          align-items: start;
          h2 {
            font-weight: 700;
          }
          span {
            font-style: italic;
          }
        }
        .content-body {
          margin: 12px 0;
        }
      }
    }
  }
`;
