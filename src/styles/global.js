import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Montserrat', sans-serif;
    background: transparent;
    background: #f2f7fc;
  }
  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
  main {
    padding-left: 290px;
  }
  section {
    padding: 30px;
  }
  .title {
    color: #000;
    position: relative;
    padding-bottom: 15px;
    margin-top: 20px;
    font-size: 25px;

    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: #000;
      opacity: .2;
    }
  }
  .btn-default {
    background: #2871ff;
    padding: 8px 30px;
    border: 0px solid;
    border-radius: 5px;
    color: #fff;
    transition: all .2s ease-in-out;
    cursor: pointer;

    &:hover {
      opacity: .7;
    }
  }
`;

export default GlobalStyles;