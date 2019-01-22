import React from 'react';

const TodoList = ({ todos, onRemove, onEdit }) => (

  <div className="row">
   <table>
       <thead>
           <tr>
               <th>Nome</th>
               <th>Duração</th>
               <th>Ação</th>
           </tr>
       </thead>
       <tbody>
          {todos.map(todo => (
            <tr key={todo.uid}>
              <td>{todo.name}</td>
              <td>{todo.hour}</td>
              <td><button className="btn__edit" onClick={() => onEdit(todo.uid)}><i className="fa fa-pencil"></i></button>
                  <button className="btn__delete" onClick={() => onRemove(todo.uid)}><i className="fa fa-trash-o"></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {todos.length === 0 && <div className="loading"><i className="fa fa-spinner fa-pulse" /> </div>}
      
    </div>
  
);

export default TodoList;