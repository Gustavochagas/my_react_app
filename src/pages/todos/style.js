import { createGlobalStyle } from 'styled-components';

const TodosStyles = createGlobalStyle`
  table {
    width: 100%;
    padding: 20px;
    background: #ededed;
    border-radius: 5px;

    th {
      text-align: left;
    }
    
    td {
      i {
        cursor: pointer;
        margin: 0 5px;
        transition: all .2s ease-in-out;
  
        &:hover {
          opacity: .7;
        }
      }
    }

    .btn__delete {
      font-size: 16px;
      background: transparent;
      border: 0px;
      color: red;
    }

    .btn__edit {
      font-size: 16px;
      background: transparent;
      border: 0px;
      color: blue;
    }
  }
  .loading {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.7);
    border-radius: 5px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    i {
      color: #fff;
      font-size: 30px;
    }
  }
`;

export default TodosStyles;