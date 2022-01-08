import * as React from 'react';
import { Checkbox } from '../checkbox';
import { TodosContext } from '../../todo-context';
import './todo-list.scss';

export const TodoList = () => {
  const { todos, setTodos } = React.useContext(TodosContext);
  const [flag, setFlage] = React.useState(false);
  const [upstate, setUpstate] = React.useState();
  const [count, setCount] = React.useState(0);
  const [countss, setCountss] = React.useState(1);
  React.useEffect(() => {
    console.log('useef calling');
    localStorage.clear();
  }, [setTodos]);
  const handleDelete = (ids) => {
    setTodos(todos.filter((task) => task.id !== ids));
  };

  const toggleCheck = (id) => {
    // Fix an ability to toggle task
    const objIndex = todos.findIndex((obj) => obj.id === id);

    console.log('objind is', objIndex);
    if (flag === false) {
      setFlage(todos[objIndex].checked = true);

      setFlage(false);
    } else {
      // setFlage(todos[objIndex].checked = false);
    }

    // console.log('flag', flag);
    console.log('count is', count);
    //  todos[objIndex].checked = true;

    //  console.log('toobj', todos[objIndex].checked);
    const h = todos.map((x) => x.checked === true);
    console.log('h', h);
    setCountss(h.filter((obj) => obj === true).length);
    console.log('fcount', countss);
    localStorage.setItem('count', countss);

    setUpstate('');
  };

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem) => (
            <Checkbox
              key={todoItem.id}
              label={todoItem.label}
              checked={todoItem.checked}
              onClick={() => toggleCheck(todoItem.id)}
              onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
              onDelete={() => handleDelete(todoItem.id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">Looks like you&apos;re absolutely free </div>
      )}
    </div>
  );
};
