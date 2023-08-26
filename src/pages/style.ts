import styled from '@emotion/styled'
export const Home = styled.section`
  min-height: calc(100vh);
  padding-top: 0 !important;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #bfff0055;
  .home-container {
    width: 100%;

    .heading {
      display: flex;
      align-items: center;
      margin: 0;
      padding: 0;

      font-weight: 100;
      text-decoration: dotted;
      font-size: 10rem;
      line-height: 0.8;
      display: flex;
      align-items: center;

      // responsive
      .symbol {
        font-size: 9rem;
      }

      .tiny {
        margin-bottom: 8px;
        text-align: end;
        font-size: 0.875rem;
        align-self: flex-end;
        /* color: var(--primary); */
      }

      .vivid {
        color: var(--primary);
      }

      .strong {
        font-weight: 900;
      }

      .tiny-name {
        transition: color 0.5s ease-in-out;
        &:hover {
          color: var(--primary);
        }
      }
    }

    .second-line {
      margin-bottom: 4rem;
    }

    .name {
      display: flex;
      flex-direction: row;
      width: 100%;
      .name-block {
        display: flex;
        font-size: inherit;
        margin: 0;
        padding: 0;
      }
    }
  }

  ${({ theme }) => theme.screen.xs} {
    .home-container {
      overflow: hidden;
      .heading {
        font-size: calc(1rem + 10vw);

        // responsive
        .symbol {
          font-size: calc(10vw);
        }

        .tiny {
          margin-bottom: 0px;
          font-size: 0.5rem;
        }
      }
      .hr {
        line-height: 1.25;
      }

      .name {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 80vw;

        & .lastname {
          align-self: flex-end;
        }
      }
    }

    .first-line > .animation-wrapper {
      width: calc(0.5rem + 10vw);
      height: calc(0.5rem + 10vw);
    }
  }

  ${({ theme }) => theme.screen.s} {
    .home-container {
      .heading {
        font-size: 6rem;

        // responsive
        .symbol {
          font-size: 5rem;
        }

        .tiny {
          margin-bottom: 0px;
          font-size: 0.5rem;
        }
      }
      .hr {
        line-height: 1.25;
      }

      .name {
        /* flex-direction: column; */
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 80%;
        & .lastname {
          align-self: flex-end;
        }
      }
    }

    .first-line > .animation-wrapper {
      width: 80px;
      height: 80px;
    }
  }
  ${({ theme }) => theme.screen.m} {
    .home-container {
      .heading {
        font-size: 6rem;
        line-height: 0.8;
        .symbol {
          font-size: 5rem;
        }

        .tiny {
          margin-bottom: 4px;
          font-size: 0.75rem;
        }
      }

      .name {
        /* flex-direction: column; */
        flex-direction: row;
        width: 100%;
      }
    }

    .first-line > .animation-wrapper {
      width: 80px;
      height: 80px;
    }
  }
  ${({ theme }) => theme.screen.l} {
    .home-container {
      .heading {
        font-size: 8rem;
        line-height: 0.8;
        .symbol {
          font-size: 7rem;
        }
      }
      .name {
        /* flex-direction: column; */
        flex-direction: row;
      }
    }

    .first-line > .animation-wrapper {
      width: 100px;
      height: 100px;
    }
  }

  ${({ theme }) => theme.screen.xl} {
    .home-container {
      .heading {
        font-size: 10rem;
        line-height: 0.8;
        .symbol {
          font-size: 8rem;
        }
      }
    }

    .first-line > .animation-wrapper {
      width: 120px;
      height: 120px;
    }
  }
`

export const About = styled.section`
  .about-container {
    margin: 20vh 0;
    .main-container {
      position: relative;
      width: 100%;
      margin-bottom: 10vh;

      .introduction-container {
        display: flex;
        justify-content: center;
        align-items: center;
        .animation-container {
          width: 200px;
          height: 200px;
        }
      }
    }
  }

  ${({ theme }) => theme.screen.xs} {
    .main-container {
      .introduction-container {
        flex-direction: column;
        .animation-container {
          width: 200px;
          height: 200px;
        }

        .about-description {
          width: 100%;
        }
      }
    }
  }
  ${({ theme }) => theme.screen.s} {
    .main-container {
      .introduction-container {
        flex-direction: column;
        .animation-container {
          width: 200px;
          height: 200px;
        }
        .about-description {
          width: 100%;
        }
      }
    }
  }
  ${({ theme }) => theme.screen.m} {
    .main-container {
      .introduction-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0 10vw;
        .animation-container {
          width: 200px;
          height: 200px;
          margin-right: 3rem;
        }

        .about-description {
          width: calc(100% - 200px);
        }
      }
    }
  }
`

export const Project = styled.section`
  position: relative;
  .animation-wrapper {
    position: absolute;
  }
  .project-container {
    margin: calc(var(--header-height) + 10vh) 0;

    .project-list-wrapper {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
  }

  ${({ theme }) => theme.screen.xs} {
    .animation-wrapper {
      top: 2rem;
      right: 3rem;
      width: 200px;
      height: 100px;
    }
    .project-container {
      .project-list-wrapper {
        margin-left: 0;
      }
    }
  }
  ${({ theme }) => theme.screen.s} {
    .animation-wrapper {
      top: 2rem;
      right: 3rem;
      width: 200px;
      height: 100px;
    }
    .project-container {
      .project-list-wrapper {
        margin-left: 0;
      }
    }
  }
  ${({ theme }) => theme.screen.m} {
    .animation-wrapper {
      top: 2rem;
      right: 2rem;
      width: 400px;
      height: 200px;
    }
    .project-container {
      .project-list-wrapper {
        margin-left: 10vw;
      }
    }
  }
`
export const Contact = styled.section`
  /* height: 150vh; */
  height: calc(100vh - var(--header-height));
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .contact-container {
    position: relative;
    margin: auto;
    width: 85%;
    .social-media-container {
      margin: 0 0 2rem 0;
      padding: 0;

      list-style-type: none;
      li {
        text-align: right;
        margin: 0;
        padding: 0;
      }
    }
  }
`
