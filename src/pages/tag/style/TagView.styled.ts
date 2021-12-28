import styled from "styled-components";

export const TagView = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  min-height: 96vh;

  .tag-wrapper {
    display: flex;
    width: 860px;


    .tag-nav {
      width: 180px;

      ul {
        padding: 40px 0px;
        margin: 0;
        list-style-type: none;
        color: black;
        li {
          a {
            text-decoration: none;
            color: black;

            &:hover {
              color: gray;
            }
          }
        }
      }
    }

    .tag-title-view {
      background-color: darkgray;
      width: 100%;
      overflow: hidden;

      .tag-title-item {
        background-color: skyblue;
        border-radius: 12px;
        padding: 16px;
        margin: 12px;

        .tag-chip-wrapper {
          display: flex;
          overflow: scroll;

          .tag-chip {
            background-color: lightgreen;
            padding: 2px 12px;
            border-radius: 12px;
            margin: 4px 8px;
          }
        }
      }

      & > * {
        text-decoration: none;
      }
    }
  }

  @media screen and (max-width: 640px) {
    /* flex-direction: column; */

    .tag-wrapper {
      flex-direction: column;
      .tag-nav {

        width: 100vw;
        background-color: pink;
        overflow: hidden;

        ul {
          margin: 0;
          padding: 0;
          white-space: nowrap;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          /* background-color: green; */

          div {
            /* background-color: cyan; */
            display: inline-block;
            li {
              /* background-color: hotpink; */
              margin: 0.44em;
              padding: 0.2em 1em;
              background-color: yellow;
              border-radius: 1em;
              
              a {
                span {
                  display: none;
                }
              }
            }
          }
        }
      }
    }
  }
`;
