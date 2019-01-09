import { createGlobalStyle } from 'styled-components';

const HeaderStyles = createGlobalStyle`
  header {
    background: #fff;
    width: 290px;
    height: 100%;
    position: fixed;
    transition: all .2s ease-in-out;
    z-index: 999;

    ul {
      list-style: none;
      border-top: 1px solid #ccc;

      li {
        border-bottom: 1px solid #ccc;
        padding: 15px 20px;

        a {
          color: #606060;
          transition: all .2s ease-in-out;

          i {
            transition: all .2s ease-in-out;
          }

          &:hover {
            color: #000;
          }
        }

        span {
          margin-left: 10px;
        }
      }

      li.active {
        position: relative;

        a {
          color: #2871ff;

          i {
            color: #2871ff;
          }
        }
      
        &:before {
          content: '';
          position: absolute;
          right: 0;
          top: 5px;
          width: 4px;
          height: 80%;
          background: #2871ff;
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        }
      }
    }

    .logo {
      text-align: center;
      margin-bottom: 20px;
      padding: 30px;
      color: #000;
    }

    .navBarButton {
      background: transparent;
      border: 0;
      cursor: pointer;
      font-size: 30px;
      position: absolute;
      right: -30px;
      top: 0;
      color: #000;
    }
  }

  header.on {
    width: 80px;

    .logo {
      padding: 10px;
      padding-top: 30px;
    }

    ul {

      li {
        text-align: center;
        padding: 15px 5px;

        span {
          display: block;
          width: 100%;
          text-align: center;
          font-size: 13px;
          margin-left: 0;
        }
      }
    }
  }
`;

export default HeaderStyles;