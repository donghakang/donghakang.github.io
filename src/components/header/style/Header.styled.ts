import styled from "styled-components";

interface HeaderProps {
  open: boolean;
  color: string;
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
  z-index: 99;
  .logo {
    margin-left: 20px;

    * {
      font-size: 2em;
      font-family: helvetica;
      font-weight: 700;
      color: ${(props) => props.color};
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
        font-size: 1.2em;
        color: ${(props) => props.color};

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
        background: linear-gradient(217deg, white, skyblue);
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
        display: flex;
        z-index: 99;
        fill: orange;
      }
    }
  }
`;
