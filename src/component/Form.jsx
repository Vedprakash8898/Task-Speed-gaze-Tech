import React, { useState } from "react";
import UserInput from "./UserInput";
import AddUserButton from "./AddUserButton";
import ListUsers from "./ListUsers";
import RemoveUserButton from "./RemoveUserButton";
import "./Form.css";

const Form = () => {
  const [userName, setUserName] = useState("");
  const [usersList, setUsersList] = useState([]);
  const [error, setError] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleUserNameChange = (event) => {
    const { value } = event.target;
    console.log('value', value);
    // Validation cannot contain special charter.
    const isValid = /^[A-Za-z\s]+$/.test(value);
    setError(!isValid ? "Only letters and spaces are allowed." : "");
    setUserName(value);
  };

  const handleAddUser = () => {
    // It does Not Contain Duplacets Value and cannt Empty
    if (userName.trim() === "") {
      setError("Username cannot be empty.");
    } else if (usersList.includes(userName)) {
      setError("Username already exists in the list.");
    } else {
      setUsersList([...usersList, userName]);
      setUserName("");
      setError("");
    }
  };

  const handleRemoveUser = () => {
    
    if (usersList.length === 0) {
      setError("No users to remove.");
    } else {
      const lastUserIndex = usersList.length - 1;
      console.log('lastUserIndex', lastUserIndex)
      setUsersList(usersList.slice(0, lastUserIndex));
      setError("");
    }
  };
  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`app ${isDarkTheme ? "dark" : ""}`}>
      <div className="container py-4">
        <h1 className="mb-4 text-center heading">User Regestration Form</h1>
        <div className="row mainrow">
          <div className="col-md-6 box1">
            <h3 className="text-center">Fill Details</h3>
            <div className="mb-3 form-group">
              <h3>User Name:</h3>
              <UserInput
                value={userName}
                onChange={handleUserNameChange}
                error={error}
              />
            </div>
            <div className="btnAlign">
            <AddUserButton onClick={handleAddUser} />
            
            <RemoveUserButton onClick={handleRemoveUser} />
            </div>
            
            <div className="theme-toggle mt-4">
              <label className="me-2">
                <h4>Select Theme:</h4>
              </label>
              <input
                type="checkbox"
                checked={isDarkTheme}
                onChange={handleThemeToggle}
              />
            </div>
          </div>
          <div className="col-md-6 box2">
            <h3>List Users:</h3>
            <ListUsers users={usersList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
