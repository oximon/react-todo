import React, { useState } from 'react';
import TodoItem from './components/TodoItem';
import './styles/main.css';
import AddField from './components/AddField';

function App() {
  const [tasks, setTasks] = useState([
    {
      text: 'Изучить ReactJS',
      completed: true,
    },
    {
      text: 'Сделать ToDo',
      completed: true,
    },
  ]);

  const onToggleCompleted = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, curIdx) =>
        index === curIdx
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  const onRemoveTask = (index) => {
    setTasks((prevTasks) =>
      prevTasks.filter((_, curIndex) => index !== curIndex)
    );
  };

  const onAddTask = (text) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        text,
        completed: false,
      },
    ]);
  };

  return (
    <div className='todo'>
      <div className='todo__header'>
        <h4>Список задач</h4>
      </div>
      <AddField onAddTask={onAddTask} />
      <div className='todo__list'>
        {tasks.map((task, index) => {
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
}

export default App;
