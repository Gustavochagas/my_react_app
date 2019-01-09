import { createGlobalStyle } from 'styled-components';

const DashboardStyles = createGlobalStyle`
  .blocks {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0;

    .block {
      padding: 40px 20px;
      margin: 0 15px;
      margin-bottom: 15px;
      background: #fff;
      box-shadow: 1px 1px 5px 0px rgba(237,237,237,1); 
      border-radius: 5px;
      min-width: 300px;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }

      .block__title {
        font-size: 16px;
        margin-bottom: 10px;
      }

      span {
        font-size: 14px;
      }
    }
  }

  .git__top {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 20px 0;

    .top__blocks {
      padding: 40px 20px;
      margin: 0 15px;
      margin-bottom: 15px;
      background: #fff;
      box-shadow: 1px 1px 5px 0px rgba(237,237,237,1); 
      border-radius: 5px;
      min-width: 300px;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }

      .block__title {
        font-size: 16px;
        margin-bottom: 10px;
      }

      span {
        font-size: 14px;
      }
    }

    a {
      background: #2871ff;
      color: #fff;
      border-radius: 5px;
      padding: 8px 20px;
      transition: all .2s ease-in-out;

      &:hover {
        opacity: .7;
      }
    }
  }
`;

export default DashboardStyles;