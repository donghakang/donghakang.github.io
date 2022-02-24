import styled from "styled-components";

interface HeaderProps {
  open: boolean;
  home: boolean | undefined;
}

export const Header = styled.nav<HeaderProps>`
  margin: 0;
  padding: 0;
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 9;
  font-size: 1.125rem;
  background-color: ${(props) => (props.home ? "" : props.theme.colors.white)};

  .logo {
    margin-left: 20px;

    * {
      font-family: helvetica;
      font-weight: 700;
      font-size: 2.25rem;
      color: ${(props) => props.theme.colors.main_orange};
      letter-spacing: -0.125em;
      text-decoration: none;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    // justify-content: space-between;

    li {
      margin: 0px 20px;
      .link {
        text-decoration: none;
        font-family: helvetica;
        font-weight: 550;
        letter-spacing: -0.04em;
        color: ${(props) => props.theme.colors.main_orange};

        &:hover {
          color: orange;
        }
      }
      button {
        background: none;
        border: none;
        outline: inherit;
      }
    }
  }
  .hamburger-menu {
    display: none;
    background: none;
    border: none;
    outline: inherit;
    margin-right: 20px;
  }

  @media screen and (max-width: 640px) {
    & {
      ul {
        background-color: white;
        z-index: 8;
        margin: 0;
        padding: 20px 0 0 0;
        position: absolute;
        display: block;
        top: 0;
        right: 0;

        transform: ${(props) =>
          props.open ? "translateX(0vw);" : "translateX(60vw);"};

        transition: transform 0.2s;
        transition-timing-function: ease-in-out;
        width: 60vw;
        height: 100vh;
        li {
          margin: 12px;
          .emoji {
            left: 0px;
            transform: translateX(0);
          }
        }

        // first element need some space.
        li:first-child {
          margin-top: 40px;
        }
      }

      .hamburger-menu {
        color: ${(props) => props.theme.colors.main_orange};
        display: flex;
        z-index: 9;
      }

      .nav-background {
        z-index: 7;
        position: absolute;
        top: 0%;

        left: 0%;

        width: 100vw;
        height: 100vh;
        background-color: black;
        opacity: 0.8;
        transition: all 0.2s;
      }
    }
  }
`;
