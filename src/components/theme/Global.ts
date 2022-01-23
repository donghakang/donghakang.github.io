import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        background-color: white;
        font-size: 16px;
    }

    @media screen and (max-width: 450px) {
        html {
            font-size: 14px;
        }
    }
`;

export default GlobalStyle;
