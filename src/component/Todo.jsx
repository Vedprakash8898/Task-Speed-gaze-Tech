import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import './Todo.css';

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    console.log(todo)
    setTodos([...todos, { ...todo, id: Date.now() }]);
  };

  const handleEdit = (updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent:"space-around" ,
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
    },
    heading: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    todoList: {
      
    },
  };

  return (
    <div  style={styles.container}>
    <h1 style={styles.heading}>TODO APP</h1>
    <TodoForm addTodo={addTodo} />
    <div className="todo-list" style={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleToggleComplete={handleToggleComplete}
        />
      ))}
    </div>
  </div>
  );
};

export default Todo;


