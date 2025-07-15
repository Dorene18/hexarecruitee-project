import React, { useEffect, useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("/api/messages")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.error("Failed to fetch messages", err));
  }, []);

  return (
    <div className="todo-list">
      <h3>To do list ({todos.length})</h3>
      {todos.map((todo, index) => (
        <div className="todo-item" key={index}>
          <img src={todo.iconUrl} alt="icon" />
          <div className="todo-text">
            <strong>{todo.title}</strong>
            <p>{todo.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
