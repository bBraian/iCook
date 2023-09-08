import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 1px ${props => props.theme['primary-80']};
    }

    body {
        background-color: ${props => props.theme['white-0']};
        color: ${props => props.theme['neutral-90']};
        -webkit-font-smoothing: antialiased;
    }

    body, input-security, textarea, button {
        font: 400 1rem Poppins, sans-serif;
    }
`;