import React from 'react';
import './App.scss';
import { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Front End' },
    { id: 2, title: 'We love Easy Front End' },
    { id: 3, title: 'They love Easy Front End' },
  ]);
  function handLeTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  return (
    <div className="App">
      <h1>React Hooks - Todo List</h1>
      <TodoList todos={todoList} onTodoClick={handLeTodoClick} />
    </div>
  );
}

export default App;
