import { css } from '@emotion/react'
export const global = css`
  // font face
  @font-face {
    font-family: 'Neue Montreal';
    src: local('Neue Montreal'),
      url(/fonts/NeueMontreal-Regular.woff) format('woff');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Neue Montreal';
    src: local('Neue Montreal'),
      url(/fonts/NeueMontreal-Light.woff) format('woff');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Pretendard';
    src: local('Pretendard'), url(/fonts/Pretendard-Light.woff) format('woff');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Pretendard';
    src: local('Pretendard'), url(/fonts/Pretendard-Thin.woff) format('woff');
    font-weight: 300;
  }

  // variables
  :root {
    --background-color: #000000; // onyx
    --invert-background-color: #ffffff;
    --font-color: #ffffff;
    --invert-font-color: #000000;
    --dark-color: #cccccc;

    --primary: #bfff00;

    --header-height: 60px;
  }

  // default setting
  body {
    /* cursor: none; */
    font-smooth: antialiased;
    margin: 0;
    padding: 0;
    color: var(--font-color);
    background-color: var(--background-color);

    // scroll bar
    scrollbar-width: 0;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }

    @media only screen and (max-width: 768px) {
      // phone view
      cursor: auto;
    }

    @media only screen and (min-width: 768px) {
      // phone view
      cursor: none;
    }
  }

  * {
    font-family: 'Neue Montreal';
    font-weight: 100;

    &::selection {
      background-color: #bfff00;
      color: var(--background-color);
    }
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  // mouse
  .c-hidden {
    opacity: 0;
  }
  .c-click {
    transform: translate(-50%, -50%) scale(0.6) !important;
    background-color: var(--primary) !important;
  }

  // language
  .kr {
    font-family: 'Pretendard';
    font-weight: 300;
  }

  button,
  a {
    @media only screen and (max-width: 768px) {
      // phone view
      cursor: pointer;
    }

    @media only screen and (min-width: 768px) {
      // phone view
      cursor: none;
    }
  }
`
