import styled from '@emotion/styled'

export const Header = styled.header`
  position: fixed;
  top: 0;
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* mix-blend-mode: difference; */
  width: calc(100% - 2rem);
  z-index: 50;
  background-color: var(--background-color);

  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      background-color: brown;
      border: none;
      background-color: var(--invert-background-color);
      color: var(--invert-font-color);
      filter: invert(100%);
      text-transform: uppercase;
      font-size: 1rem;
    }
  }

  .logo {
    button {
      font-size: 2rem;
      font-weight: 900;
    }
  }

  ${({ theme }) => theme.screen.phone} {
    .break {
      padding: 0 4px;
    }

    button {
      padding: 0;
    }
  }
`

export const Layout = styled.main`
  padding: 0 1rem;
  position: relative;

  section,
  nav {
    padding-top: calc(var(--header-height));
  }
`

export const Footer = styled.footer`
  padding: 2rem;
  font-size: small;
  color: var(--dark-color);
`
