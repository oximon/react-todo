import { makeAutoObservable } from 'mobx';

class Todo {
  tasks = [
    {
      text: 'Изучить ReactJS',
      completed: true,
    },
    {
      text: 'Сделать ToDo',
      completed: true,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  toggleComplte(index) {
    this.tasks = this.tasks.map((item, curIndex) =>
      index === curIndex
        ? {
            ...item,
            completed: !item.completed,
          }
        : item
    );
  }

  removeTask(index) {
    this.tasks = this.tasks.filter((_, curIndex) => index !== curIndex);
  }

  addTask(text) {
    this.tasks.push({
      text,
      completed: false,
    });
  }
}

export default new Todo();
