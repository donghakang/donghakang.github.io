import styled from "styled-components";

export const BlogView = styled.div`
  /* background-color: yellowgreen; */
  width: 100%;
  display: flex;
  justify-content: center;

  .main {
    max-width: 860px;
    width: 100%;
    /* background-color: aliceblue; */
    padding: 20px;

    .main-container {
      .title-section {
        margin: 4em 0;

        .title-info {
          * {
            margin: 0 0.4em;
          }
        }
        .chip-info {
          margin-top: 8px;
          padding: 0;
        }
      }

      .footer-section {
        display: flex;
        margin: 6em 0 2em 0;
        justify-content: space-between;
      }
    }
  }

  @media screen and (max-width: 640px) {
    width: 100vw;

    .main {
      width: 100vw;
      margin: 0;
      padding: 0;
      .main-container {
        padding: 1em;
        .title-section {
          margin: 0;

          .title-info {
            padding: 0;
          }
          .chip-info {
            margin: 0;
            padding: 0;
          }
        }
      }
    }
  }
`;
