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
  input {
    background: #fff;
    padding: 8px 20px;
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,0.2);
    width: 100%;
    margin-bottom: 10px;
  }

  input.messageError {
    border: 1px solid red;
  }

  label {
    display: block;
    width: 100%;
    margin-bottom: 5px;
    font-size: 14px;
  }
  .row {
    margin: 30px 0;
    display: flex;
    flex-wrap: wrap;
    position: relative;
  }
  .col-md-4 {
    width: 33.3333%;
    padding: 0 15px;
  }
`;

export default GlobalStyles;