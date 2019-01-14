import { createGlobalStyle } from 'styled-components';

const LoginStyles = createGlobalStyle`
  .form__login {
    margin-top: 30px;
    width: 50%;
    padding: 40px 20px;
    background: #fff;
    box-shadow: 1px 1px 5px 0px rgba(237,237,237,1);
    border-radius: 5px;

    input {
      background: #fff;
      padding: 8px 20px;
      border-radius: 5px;
      border: 1px solid rgba(0,0,0,0.2);
      width: 100%;
      margin-bottom: 10px;
    }

    label {
      display: block;
      width: 100%;
      margin-bottom: 5px;
      font-size: 14px;
    }

    div {
      position: relative;
      padding: .75rem 1.25rem;
      border: 1px solid transparent;
      border-radius: .25rem;
      margin-top: 20px;
    }

    div.error {
      color: #721c24;
      background-color: #f8d7da;
      border-color: #f5c6cb;
    }

    div.logado {
      color: #155724;
      background-color: #d4edda;
      border-color: #c3e6cb;
    }

    div.loading {
      color: #004085;
      background-color: #cce5ff;
      border-color: #b8daff;
    }
  }
`;

export default LoginStyles;