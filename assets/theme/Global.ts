import { css } from "@emotion/react";

export const global = css`
  @font-face {
    font-family: "Inter";
    src: url("/fonts/Inter.ttf");
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    cursor: none;
  }

  html *,
  body * {
    cursor: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1 {
    font-family: "Inter", -apple-system, sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  :root {
    --mobile-view: 768px;
  }

  .c-hidden {
    opacity: 0;
  }

  .c-click {
    transform: translate(-50%, -50%) scale(0.5) !important;
    background-color: orange !important;
  }

  .c-image-hover {
    width: 300px !important;
    height: 300px !important;

    * {
      width: 100% !important;
      height: 100% !important;
    }
  }

  h1 {
    font-family: "Inter", sans-serif;
    font-weight: 800;
    /* letter-spacing: -0.09em; */
    line-height: 0.8;
  }
`;
