import React from 'react';

const ListUsers = ({ users }) => {
  console.log('users', users)
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}><h3>{user}</h3></li>
      ))}
    </ul>
  );
};

export default ListUsers;
