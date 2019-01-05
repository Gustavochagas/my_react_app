import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html, body, #root {
    height: 100%
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Montserrat', sans-serif;
    background: transparent;
    color: #FFF;
    background: green;
  }
  footer {
      position: absolute;
      bottom: 0;
      width: 100%;
      text-align: center;
  }
`;

export default GlobalStyles;