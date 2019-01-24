import { createGlobalStyle } from 'styled-components';

const WordpressStyles = createGlobalStyle`
  .posts {
    display: flex;
    flex-wrap: wrap;

    .post {
      padding: 40px 20px;
      margin: 0 15px;
      margin-bottom: 15px;
      background: #fff;
      box-shadow: 1px 1px 5px 0px rgba(237,237,237,1);
      border-radius: 5px;
      min-width: 300px;

      h2 {
        font-size: 16px;
      }
    }
  }
`;

export default WordpressStyles;