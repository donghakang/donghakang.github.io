import styled from "styled-components";

interface TagViewProps {
  tagMenuBackgroundColor: string;
  chipColor: string;
}

export const TagView = styled.div<TagViewProps>`
  display: flex;
  justify-content: center;
  width: 100vw;
  min-height: 96vh;

  .tag-wrapper {
    display: flex;
    width: 860px;

    .tag-nav {
      width: 180px;

      .tag-nav-title {
        div {
          font-weight: 700;
          color: lightblue;
        }
        hr {
          border-color: blue;
        }
      }

      ul {
        padding: 40px 0px;
        margin: 0;
        list-style-type: none;
        color: black;
        li {
          a {
            text-decoration: none;
            /* color: black; */
            color: black;

            &:hover {
              color: gray;
            }
          }

          .selected {
            color: blue;
            font-weight: 500;
          }
        }
      }
    }

    .tag-title-view {
      width: 100%;
      overflow: hidden;
      a {
        text-decoration: none;
      }
      .tag-title-item {
        color: black;
        background-color: ${({ tagMenuBackgroundColor }) =>
          tagMenuBackgroundColor};
        border-radius: 12px;
        padding: 16px;
        margin: 12px;

        .tag-chip-wrapper {
          display: flex;
          overflow: scroll;

          .tag-chip {
            background-color: ${({ chipColor }) => chipColor};
            padding: 2px 12px;
            border-radius: 12px;
            margin: 4px 8px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 640px) {
    /* flex-direction: column; */

    .tag-wrapper {
      flex-direction: column;
      .tag-nav {
        width: 100vw;
        overflow: hidden;

        ul {
          margin: 0;
          padding: 1rem 0;
          white-space: nowrap;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          /* background-color: green; */

          div {
            /* background-color: cyan; */
            display: inline-block;

            .tag-nav-title {
              display: none;
            }
            li {
              /* background-color: hotpink; */
              margin: 0.44em;
              padding: 0.2em 1em;
              background-color: ${({ chipColor }) => chipColor};
              border-radius: 1em;

              a {
                &:hover {
                  color: gray;
                }
              }
              /* a {
                span {
                  display: none;
                }
              } */
            }
          }
        }
      }
    }
  }
`;
