import * as React from 'react';
import './todo-results.scss';
import { TodosContext } from '../../todo-context';

export const TodoResults = () => {
  const { todos, setTodos } = React.useContext(TodosContext);
  //  const [count, setcount] = React.useState(0);
  const [up, setUp] = React.useState();
  const calculateChecked = () => {
    // Fix an ability to calculate completed tasks
  };

  const count = (localStorage.getItem('count'));

  console.log('count is', count);
  return (
    <div className="todo-results">
      Done:
      {count}
    </div>
  );
};
