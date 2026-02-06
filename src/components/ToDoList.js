import React, { useState } from "react";
import "./todolist.css";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const handleRemoveTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <p>To-Do List</p>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <div className="item">
            <li key={index}>
              {todo}
            </li>
            <button onClick={() => handleRemoveTodo(index)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
