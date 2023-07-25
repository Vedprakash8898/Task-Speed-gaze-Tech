import React, { useState } from "react";

const TodoItem = ({ todo, handleEdit, handleDelete, handleToggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState(todo);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedTodo({
      ...updatedTodo,
      [name]: value,
    });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    handleEdit(updatedTodo);
    setIsEditing(false);
  };
  

  return (
    <div className="todo-item ">
      
      {!isEditing ? (
        <>
          <div className="todo-info ">
            <div>
              <input
                type="checkbox"
                checked={todo.isComplete}
                onChange={() => handleToggleComplete(todo.id)}
              /> &nbsp;&nbsp;
              <span className={todo.isComplete ? "completed" : ""}>
                <h3>{todo.task}</h3>
              </span>
            </div>
            <div className="date-priority">
              <span>Date:<span><h3>{todo.date}</h3></span>
              </span>
             
              <span>Priority: <h3>{todo.priority}</h3></span>
              
            </div>
            <br/>

            <div className="buttons btnclass">
            <button onClick={handleEditClick}>Edit</button> &nbsp;&nbsp;
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>



          </div>
          
        </>
      ) : (
        <div className="todo-info">
          <div class="form-group field">
          <label>Enter Yours Task</label>
            <input
              type="text"
              name="task"
              value={updatedTodo.task}
              onChange={handleChange}
            />
          </div>
          <div className="date-priority form-group field">
          <label>Select Yours date</label>
            <input
              type="date"
              name="date"
              value={updatedTodo.date}
              onChange={handleChange}
              style={{width:"100%"}}
            />
            </div>
            <div class="form-group field menu ">
        <label>Select the Range</label>

            <select
              type="text"
              name="priority"
              value={updatedTodo.priority}
              onChange={handleChange}
              class="form-select"
            >
              <option selected>Please select this select menu</option>
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>

            </select>
          </div>

          
          <div className="buttons form-group field btnclass">
            <button  onClick={handleSaveClick}>Save</button> &nbsp;&nbsp;
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
