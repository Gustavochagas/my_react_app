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
  }
`;

export default TodosStyles;