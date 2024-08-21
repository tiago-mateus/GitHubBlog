import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
      *{
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }

    body{
        background-color: ${(props) => props.theme['base-background']};
        color: ${(props) => props.theme['base-title']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font: 400 1rem Nunito, sans-serif;
    }

`