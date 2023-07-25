import React from 'react';

const AddUserButton = ({ onClick }) => {
  return (
    <button type="submit"  className='add btn btn-primary' onClick={onClick}>
      Add User
    </button> 
  );
};

export default AddUserButton;
