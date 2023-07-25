import React, { useState } from "react";
import "./Todo.css";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    task: "",
    date: "",
    priority: "low",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(todo);
    setTodo({
      task: "",
      date: "",
      priority: "low",
    });
  };

  return (
    <form className="formval" onSubmit={handleSubmit}>
      <div class="form-group field todo-form">
        <label>Enter Yours Task</label>
        <input
          type="text"
          name="task"
          value={todo.task}
          class="form-control"
          onChange={handleChange}
          placeholder="Enter Task"
          required
        />
      </div>
      <div class="form-group field">
        <label>Select Yours date</label>
        <input
          type="date"
          name="date"
          value={todo.date}
          className="form-control"
          onChange={handleChange}
          placeholder="Password"
          style={{width:"100%"}}
          required
        />
      </div>
      <div class="form-group field">
        <label>Select the Range</label>
        <select
          name="priority"
          value={todo.priority}
          onChange={handleChange}
          class="form-select"
          required
        >
          <option selected>Please select this select menu</option>
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
      </div>
        
        <div class="form-group field button">
        <button type="submit" class="btn btn-primary text-center ">
        Submit
      </button>
        </div>
      
    </form>
  );
};

export default TodoForm;
