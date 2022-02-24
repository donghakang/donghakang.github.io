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
/*     
    .c--hidden {
      opacity: 0;
    } */

    .c-hidden {
      opacity: 0;
    }

    .c-click {
      transform: translate(-50%, -50%) scale(0.5);
      background-color: #121212;
    }

    @media screen and (max-width: 450px) {
        html {
            font-size: 14px;
        }
    }
`;

export default GlobalStyle;
