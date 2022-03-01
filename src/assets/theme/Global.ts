import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        background-color: white;
        font-size: 16px;
    }

    html,body {
      cursor: none
    }
    html *,body * {
      cursor: none;
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

    // Korean fonts
    .kr {
      font-family: 'IBM Plex Sans KR', sans-serif;
      font-weight: 400;
    }

    // heading
    h1, h2, h3 {
      transform: scale(1, 0.9);
    }

    @media screen and (max-width: 450px) {
        html {
            font-size: 14px;
        }
    }
`;

export default GlobalStyle;
