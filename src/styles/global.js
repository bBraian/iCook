import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${props => props.theme['white-0']};
        color: ${props => props.theme['neutral-90']};
        -webkit-font-smoothing: antialiased;
    }

    body, input-security, textarea, button {
        font: 400 1rem Poppins, sans-serif;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`;