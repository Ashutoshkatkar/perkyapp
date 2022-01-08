import * as React from 'react';
import { TodosContext } from '../../todo-context';
import './todo-form.scss';

export const TodoForm = () => {
  const { todos, setTodos } = React.useContext(TodosContext);

  const [task, setTask] = React.useState('');

  const handleAddTodo = () => {
    if (!task) {
      alert('please fill input');
    } else {
      const ids = Math.random().toString(4).slice(2);
      setTodos([...todos, { id: ids, label: task, checked: false }]);

      setTask('');
    }
  };

  console.log('mIAN TODO', todos);

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  // console.log('val', task);

  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};
