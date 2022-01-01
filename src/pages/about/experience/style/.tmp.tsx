import styled from "styled-components";

export const ExperienceLayer = styled.div`
  /* background-color: yellow; */

  
  .experience-container {
    display: flex;
    .timeline {
      padding: 1em;
      /* background-color: pink; */
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
              background-color: aliceblue;

              border-style: solid;
              border-radius: 50%;
              border-color: black;
            }

            .time-milestone {
              flex-grow: 1;
              width: 2px;
              background-color: aliceblue;
            }
          }

          .time-title {
            margin-bottom: 20px;
          }

          // hover click
          &:hover {
            .timepoint {
              background-color: blue;
              border-color: blue;
            }

            .time-title {
              color: blue;
            }
          }
        }
      }
    }

    .content {
      background-color: rgba(240, 248, 255, 0.6);
      border-radius: 1em; 
      padding: 1em;

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
    .experience-container {
      background-color: green;
      flex-direction: column;
      .timeline {
        ul {
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: row-reverse;
          white-space: nowrap;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;

          li {
            display: inline-block;
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
        /* background-color: aliceblue; */
        height: 100%;

        .content-title {
          display: flex;
          flex-direction: column;
          align-items: start;
          h2 {
            font-weight: 700;
          }
          span {
            /* background-color: aliceblue; */
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
