import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, button, input {
    font-family: Montserrat, sans-serif;
  }

  html, body {
    height: auto;
    -webkit-font-smoothing: antialiased;
  }

  body {
    scroll-behavior: smooth;
  }
`;
