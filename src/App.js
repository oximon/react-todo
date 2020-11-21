import React from 'react';
import { observer } from 'mobx-react-lite';
import TodoItem from './components/TodoItem';
import AddField from './components/AddField';
import Todo from './store/Todo';
import './styles/main.css';

const App = observer(() => {
  const onToggleCompleted = (index) => {
    Todo.toggleComplte(index);
  };

  const onRemoveTask = (index) => {
    Todo.removeTask(index);
  };

  const onAddTask = (text) => {
    Todo.addTask(text);
  };

  return (
    <div className='todo'>
      <div className='todo__header'>
        <h4>Список задач</h4>
      </div>
      <AddField onAddTask={onAddTask} />
      <div className='todo__list'>
        {Todo.tasks.map((task, index) => {
          return (
            <TodoItem
              text={task.text}
              key={index}
              index={index}
              completed={task.completed}
              onToggleCompleted={onToggleCompleted}
              onRemoveTask={onRemoveTask}
            />
          );
        })}
      </div>
    </div>
  );
});

export default App;
